import React, {FC, useEffect, useState} from "react"
import {useBehaviorSubject} from "react-captain"

import AuthGuard from "./auth/guard"
import {modules, encodeStep, decodeStep, lastStep$, setLastStep} from "./modules/context"
import PageContainer from "./modules/page"
import Nav from "./nav"
import Main from "./main"

const App: FC = () => {
  const [theme, setTheme] = useState<{[key: string]: string}>({})
  const [lastStep] = useBehaviorSubject(lastStep$)
  const [module, setModule] = useState(lastStep.module)
  const [chapter, setChapter] = useState(lastStep.chapter)
  const [page, setPage] = useState(lastStep.page)
  const [components, setComponents] = useState<{[key: string]: FC}>({})
  const CurrPage = components[encodeStep({module, chapter, page})] || (() => null)

  useEffect(() => {
    setModule(lastStep.module)
    setChapter(lastStep.chapter)
    setPage(lastStep.page)
  }, [lastStep])

  useEffect(() => {
    setComponents(
      modules.keys.reduce((components, key) => {
        const {module, chapter, page} = decodeStep(key)
        return {
          ...components,
          [key]: React.lazy(async () => {
            const [importedModule] = await Promise.all([
              import(`./modules/module-${module}/chapter-${chapter}/page-${page}.tsx`),
              new Promise<void>(resolve => setTimeout(resolve, 300)),
            ])
            return importedModule
          }),
        }
      }, {}),
    )
  }, [])

  useEffect(() => {
    import(`./modules/module-${module}/theme.module.scss`).then(module => setTheme(module.default))
  }, [module])

  function prevPage() {
    let prevModule = module
    let prevChapter = chapter
    let prevPage = page - 1

    if (prevPage < 1) {
      prevChapter -= 1
      prevPage = modules[module][prevChapter]
    }

    if (prevChapter < 1) {
      prevModule -= 1
      prevChapter = modules[prevModule].length - 1
      prevPage = modules[prevModule][prevChapter]
    }

    if (prevModule < 0) {
      return
    }

    setModule(prevModule)
    setChapter(prevChapter)
    setPage(prevPage)
  }

  function nextPage() {
    let nextModule = module
    let nextChapter = chapter
    let nextPage = page + 1

    if (nextPage > modules[module][chapter]) {
      nextChapter += 1
      nextPage = 1
    }

    if (nextChapter >= modules[module].length) {
      nextModule += 1
      nextChapter = 1
      nextPage = 1
    }

    if (nextModule >= modules.length) return
    if (nextChapter >= modules[nextModule].length) return
    if (nextPage > modules[nextModule][nextChapter]) return

    setLastStep(nextModule, nextChapter, nextPage)
    setModule(nextModule)
    setChapter(nextChapter)
    setPage(nextPage)
  }

  function updateChapter(nextChapter: number) {
    if (
      module <= lastStep.module &&
      (module !== lastStep.module || nextChapter <= lastStep.chapter) &&
      (module !== lastStep.module || nextChapter !== lastStep.chapter || page <= lastStep.page)
    ) {
      setChapter(nextChapter)
      setPage(1)
    }
  }

  function updateModule(nextModule: number) {
    if (lastStep.module >= nextModule) {
      setModule(nextModule)
      setChapter(1)
      setPage(1)
    }
  }

  function countPagesTill(end?: number) {
    return modules[module].slice(0, end).reduce((sum, pages) => sum + pages, 0)
  }

  return (
    <AuthGuard>
      <Nav activeModule={module} changeModule={updateModule} />
      <Main theme={theme}>
        <PageContainer
          theme={theme}
          currModule={module}
          currChapter={chapter}
          nbChapters={Object.values(modules[module]).length}
          setChapter={updateChapter}
          currPage={countPagesTill(chapter) + page}
          nbPages={countPagesTill()}
          prevPage={prevPage}
          nextPage={nextPage}
        >
          <CurrPage />
        </PageContainer>
      </Main>
    </AuthGuard>
  )
}

export default App
