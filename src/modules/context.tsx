import firebase from "firebase/app"

import {auth$} from "../auth/context"

type ModuleKey = string

type Modules = number[][] & {
  keys: ModuleKey[]
}

function createModulesProxy() {
  const modules: Modules = Object.assign([], {keys: []})
  return new Proxy(modules, {
    get: (obj: Modules, prop: number) => obj[prop] || createChaptersProxy(),
  })
}

function createChaptersProxy() {
  return new Proxy([], {
    get: (obj: number[], prop: number) => obj[prop] || 0,
  })
}

const paths = require.context(__dirname, true, /module-\d+\/chapter-\d+\/page-\d+.tsx$/).keys()

export const modules = paths.reduce((modules, path) => {
  const match = path.match(/module-(\d+)\/chapter-(\d+)\/page-(\d+).tsx$/)
  if (!match) throw new Error("Module not found")

  const module = Number(match[1])
  const chapter = Number(match[2])
  const page = Number(match[3])
  const key: ModuleKey = [module, chapter, page].join(".")

  Object.assign(modules, {
    keys: [...modules.keys, key],
    [module]: Object.assign(modules[module], {[chapter]: modules[module][chapter] + 1}),
  })

  return modules
}, createModulesProxy())

export function encodeModuleKey(module: number, chapter: number, page: number): ModuleKey {
  return [module, chapter, page].join(".")
}

export function decodeModuleKey(moduleKey: ModuleKey): [number, number, number] {
  const numbers = moduleKey.split(".").map(Number)
  if (numbers.length < 2) throw new Error("Invalid module key")
  return [numbers[0], numbers[1], numbers[2]]
}

export function getLastStep() {
  // Use photoURL to retrieve highest user's position
  return auth$.value.type === "authenticated" ? auth$.value.lastStep : [0, 1, 1]
}

export async function setLastStep(module: number, chapter: number, page: number) {
  const user = firebase.auth().currentUser
  if (user && auth$.value.type === "authenticated") {
    const [lastModule, lastChapter, lastPage] = getLastStep()
    if (
      module > lastModule ||
      (module === lastModule && chapter > lastChapter) ||
      (module === lastModule && chapter === lastChapter && page > lastPage)
    ) {
      const lastStep: [number, number, number] = [module, chapter, page]
      auth$.next({...auth$.value, lastStep})
      await user.updateProfile({photoURL: encodeModuleKey(...lastStep)})
    }
  }
}
