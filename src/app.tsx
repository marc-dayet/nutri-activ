import React, {FC, Suspense, useEffect, useState} from "react"

import Nav from "./_shared/nav"
import {PageProps} from "./modules/_shared/page"
import modules from "./modules/_shared/context"
import Main from "./main"

const App: FC = () => {
  const [theme, setTheme] = useState("")
  const [module, setModule] = useState(0)
  const [chapter, setChapter] = useState(2)
  const [page, setPage] = useState(4)

  const CurrPage = React.lazy<FC<PageProps>>(() =>
    import(`./modules/module-${module}/chapter-${chapter}/page-${page}.tsx`),
  )

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

  useEffect(() => {
    import(`./modules/module-${module}/theme.module.scss`).then(module =>
      setTheme(module.default.main),
    )
  }, [module])

  return (
    <>
      <Nav />
      <Main theme={theme}>
        <Suspense fallback="Loading...">
          <CurrPage
            currPage={countPagesTill(chapter) + page}
            nbPages={countPagesTill()}
            prevPage={prevPage}
            nextPage={nextPage}
            currChapter={chapter}
            nbChapters={Object.values(modules[module]).length}
            setChapter={updateChapter}
          />
        </Suspense>
      </Main>
    </>
  )
}

export default App
