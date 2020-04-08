import React, {FC, Suspense, useEffect, useState} from "react"
import {useBehaviorSubject} from "react-captain"
import range from "lodash/fp/range"

import Loader from "./page-components/loader"
import PageButton from "./page-components/button"
import ChapterButton from "./page-components/chapter-button"
import {steps, currStep$, lastStep$, saveLastStep} from "./context"

import cs from "./page.module.scss"

const PageContainer: FC = props => {
  const [step] = useBehaviorSubject(currStep$)
  const [lastStep] = useBehaviorSubject(lastStep$)
  const [isLoading, setLoading] = useState(false)
  const nbChapters = Object.values(steps[step.module]).length
  const nbPages = countPagesTill()
  const currPage = countPagesTill(step.chapter) + step.page

  function countPagesTill(end?: number) {
    return steps[step.module].slice(0, end).reduce((sum, pages) => sum + pages, 0)
  }

  const LoaderFallback: FC = () => {
    useEffect(() => {
      setLoading(true)
      return () => setLoading(false)
    }, [])

    return null
  }

  function prevPage() {
    let prevModule = step.module
    let prevChapter = step.chapter
    let prevPage = step.page - 1

    if (prevPage < 1) {
      prevChapter -= 1
      prevPage = steps[step.module][prevChapter]
    }

    if (prevChapter < 1) {
      prevModule -= 1
      prevChapter = steps[prevModule].length - 1
      prevPage = steps[prevModule][prevChapter]
    }

    if (prevModule < 0) {
      return
    }

    currStep$.next({module: prevModule, chapter: prevChapter, page: prevPage})
  }

  function nextPage() {
    let nextModule = step.module
    let nextChapter = step.chapter
    let nextPage = step.page + 1

    if (nextPage > steps[step.module][step.chapter]) {
      nextChapter += 1
      nextPage = 1
    }

    if (nextChapter >= steps[step.module].length) {
      nextModule += 1
      nextChapter = 1
      nextPage = 1
    }

    if (nextModule >= steps.length) return
    if (nextChapter >= steps[nextModule].length) return
    if (nextPage > steps[nextModule][nextChapter]) return

    currStep$.next({module: nextModule, chapter: nextChapter, page: nextPage})
    saveLastStep(nextModule, nextChapter, nextPage)
  }

  function setChapter(nextChapter: number) {
    if (
      step.module <= lastStep.module &&
      (step.module !== lastStep.module || nextChapter <= lastStep.chapter) &&
      (step.module !== lastStep.module ||
        nextChapter !== lastStep.chapter ||
        step.page <= lastStep.page)
    ) {
      currStep$.next({...step, chapter: nextChapter, page: 1})
    }
  }

  return (
    <div className={cs.container}>
      <div className={cs.pagination}>
        Page {currPage}/{nbPages}
      </div>
      <div className={cs.content}>
        <Suspense fallback={<LoaderFallback />}>{props.children}</Suspense>
      </div>
      <Loader isVisible={isLoading} />
      <footer className={cs.navigation}>
        <div className={cs.pages}>
          <PageButton onClick={prevPage}>Précédent</PageButton>
          <PageButton onClick={nextPage}>Suivant</PageButton>
        </div>
        <div className={cs.chapters}>
          {range(1, nbChapters + 1).map(chapter => (
            <ChapterButton
              key={chapter}
              isActive={chapter === step.chapter}
              onClick={() => setChapter(chapter)}
              disabled={step.module >= lastStep.module && chapter > lastStep.chapter}
            >
              {chapter}
            </ChapterButton>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default PageContainer
