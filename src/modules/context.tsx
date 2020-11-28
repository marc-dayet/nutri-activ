import firebase from "firebase/app";
import {BehaviorSubject} from "rxjs";
import {map} from "rxjs/operators";

import {auth$} from "../auth/context";

type StepKey = string;

type Steps = number[][] & {
  keys: StepKey[];
};

export type Step = {
  module: number;
  chapter: number;
  page: number;
};

export const initialStep: Step = {module: 0, chapter: 1, page: 1};
export const lastStep$ = new BehaviorSubject(initialStep);
export const currStep$ = new BehaviorSubject(initialStep);

auth$
  .pipe(map((auth) => (auth.type === "authenticated" ? auth.lastStep : initialStep)))
  .subscribe(lastStep$);

lastStep$.subscribe(currStep$);

function createModulesProxy() {
  const steps: Steps = Object.assign([], {keys: []});
  return new Proxy(steps, {
    get: (obj: Steps, prop: number) => obj[prop] || createChaptersProxy(),
  });
}

function createChaptersProxy() {
  return new Proxy([], {
    get: (obj: number[], prop: number) => obj[prop] || 0,
  });
}

const paths = require.context(__dirname, true, /module-\d+\/chapter-\d+\/page-\d+.tsx$/).keys();

export const steps = paths.reduce((steps, path) => {
  const match = path.match(/module-(\d+)\/chapter-(\d+)\/page-(\d+).tsx$/);
  if (!match) throw new Error("Module not found");

  const module = Number(match[1]);
  const chapter = Number(match[2]);
  const page = Number(match[3]);
  const key: StepKey = [module, chapter, page].join(".");

  Object.assign(steps, {
    keys: [...steps.keys, key],
    [module]: Object.assign(steps[module], {[chapter]: steps[module][chapter] + 1}),
  });

  return steps;
}, createModulesProxy());

export function encodeStep(step: Step): StepKey {
  return Object.values(step).join(".");
}

export function decodeStep(stepKey: StepKey): Step {
  const numbers = stepKey.split(".").map(Number);
  if (numbers.length < 2) throw new Error("Invalid module key");
  return {module: numbers[0], chapter: numbers[1], page: numbers[2]};
}

export async function saveLastStep(module: number, chapter: number, page: number) {
  const user = firebase.auth().currentUser;

  if (user && auth$.value.type === "authenticated") {
    const lastStep = lastStep$.value;

    if (
      module > lastStep.module ||
      (module === lastStep.module && chapter > lastStep.chapter) ||
      (module === lastStep.module && chapter === lastStep.chapter && page > lastStep.page)
    ) {
      const lastStep: Step = {module, chapter, page};
      auth$.next({...auth$.value, lastStep});
      await user.updateProfile({photoURL: encodeStep(lastStep)});
    }
  }
}

export function isFirstStep(step: Step) {
  return step.module === 0 && step.chapter === 1 && step.page === 1;
}

export function isLastStep(step: Step) {
  return step.module === 4 && step.chapter === 5 && step.page === 3;
}

const otherTitles = ["Introduction", "À savoir", "À transmettre", "Quiz", "Questionnaire"];
const introTitles = [
  "Introduction",
  "Présentation",
  "Fondements et contenus",
  "Accès questionnaire",
];

export function getTitle(step: Step, chapter: number) {
  return isFirstStep(step) ? introTitles[chapter - 1] || "" : otherTitles[chapter - 1] || "";
}
