function createModulesProxy() {
  return new Proxy([], {
    get: (obj: number[][], prop: number) => obj[prop] || createChaptersProxy(),
  })
}

function createChaptersProxy() {
  return new Proxy([], {
    get: (obj: number[], prop: number) => obj[prop] || 1,
  })
}

const modulesPath = require
  .context("..", true, /module-\d+\/chapter-\d+\/page-\d+.tsx$/)
  .keys()
  .reduce((modules, path) => {
    const match = path.match(/module-(\d+)\/chapter-(\d+)\/page-(\d+).tsx$/)
    if (!match) throw new Error("Module not found")
    const module = Number(match[1])
    const chapter = Number(match[2])
    Object.assign(modules, {[module]: {[chapter]: modules[module][chapter] + 1}})
    return modules
  }, createModulesProxy())

export default modulesPath
