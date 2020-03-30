import React, {FC, Suspense, useEffect, useState} from "react"
import range from "lodash/fp/range"

import Loader from "./page-components/loader"
import PageButton from "./page-components/button"
import ChapterButton from "./page-components/chapter-button"

import cs from "./page.module.scss"

export type PageProps = {
  theme: {[key: string]: string}
  currPage: number
  nbPages: number
  prevPage: () => void
  nextPage: () => void
  currChapter: number
  nbChapters: number
  setChapter: (chapter: number) => void
}

const PageContainer: FC<PageProps> = props => {
  const {
    theme,
    currPage,
    nbPages,
    prevPage,
    nextPage,
    currChapter,
    nbChapters,
    setChapter,
    children,
  } = props

  const [isLoading, setLoading] = useState(false)

  const LoaderFallback: FC = () => {
    useEffect(() => {
      setLoading(true)
      return () => setLoading(false)
    }, [])

    return null
  }

  return (
    <div className={cs.container}>
      <div className={cs.pagination}>
        Page {currPage}/{nbPages}
      </div>
      <div className={cs.content}>
        <Suspense fallback={<LoaderFallback />}>{children}</Suspense>
      </div>
      <Loader className={theme.pageLoader} isVisible={isLoading} />
      <footer className={cs.navigation}>
        <div className={cs.pages}>
          <PageButton onClick={prevPage}>Précédent</PageButton>
          <PageButton onClick={nextPage}>Suivant</PageButton>
        </div>
        <div className={cs.chapters}>
          {range(1, nbChapters + 1).map(chapter => (
            <ChapterButton
              key={chapter}
              isActive={chapter === currChapter}
              onClick={() => setChapter(chapter)}
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
