import {from, BehaviorSubject} from "rxjs"
import {map, mergeMap, distinctUntilChanged} from "rxjs/operators"

import {currStep$, isLastStep} from "../modules/context"

type Theme = {
  [key: string]: string
}

export const theme$ = new BehaviorSubject<Theme>({})

currStep$
  .pipe(
    map(step => (isLastStep(step) ? 0 : step.module)),
    distinctUntilChanged(),
    mergeMap(module => from(importTheme(module))),
    map(module => module.default),
  )
  .subscribe(theme$)

function importTheme(module: number): Promise<{[key: string]: Theme}> {
  return import(`../modules/module-${module}/theme.module.scss`)
}
