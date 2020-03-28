import React, {FC, useEffect, useState} from "react"
import {modules, encodeModuleKey, decodeModuleKey} from "./modules/context"
import PageContainer from "./modules/page-container"
import Nav from "./nav"
import Main from "./main"

const App: FC = () => {
  const [theme, setTheme] = useState<{[key: string]: string}>({})
  const [module, setModule] = useState(0)
  const [chapter, setChapter] = useState(5)
  const [page, setPage] = useState(1)
  const [components, setComponents] = useState<{[key: string]: FC}>({})
  const key = encodeModuleKey(module, chapter, page)
  const CurrPage = components[key] || (() => null)

  useEffect(() => {
    setComponents(
      modules.keys.reduce((components, key) => {
        const [module, chapter, page] = decodeModuleKey(key)
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

    setModule(nextModule)
    setChapter(nextChapter)
    setPage(nextPage)
  }

  function updateChapter(chapter: number) {
    setChapter(chapter)
    setPage(1)
  }

  function countPagesTill(end?: number) {
    return modules[module].slice(0, end).reduce((sum, pages) => sum + pages, 0)
  }

  return (
    <>
      <Nav />
      <Main theme={theme}>
        <PageContainer
          theme={theme}
          currPage={countPagesTill(chapter) + page}
          nbPages={countPagesTill()}
          prevPage={prevPage}
          nextPage={nextPage}
          currChapter={chapter}
          nbChapters={Object.values(modules[module]).length}
          setChapter={updateChapter}
        >
          <CurrPage />
        </PageContainer>
      </Main>
    </>
  )
}

export default App
