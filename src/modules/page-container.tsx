import React, {FC, Suspense, useEffect, useState} from "react"
import cn from "classnames"
import range from "lodash/fp/range"

import Loader from "./page-loader"

import cs from "./page-container.module.scss"

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
          <button className={cs.page} onClick={() => prevPage()}>
            Précédent
          </button>
          <button className={cs.page} onClick={() => nextPage()}>
            Suivant
          </button>
        </div>
        <div className={cs.chapters}>
          {range(1, nbChapters + 1).map(chapter => (
            <button
              key={chapter}
              className={cn(cs.chapter, {[cs.active]: chapter === currChapter})}
              onClick={() => setChapter(chapter)}
            >
              {chapter}
            </button>
          ))}
        </div>
      </footer>
    </div>
  )
}

export const Title: FC = ({children}) => {
  return <h1 className={cs.title}>{children}</h1>
}

export const SubTitle: FC<{className?: string}> = ({children, className}) => {
  return <h2 className={cn(cs.subtitle, className)}>{children}</h2>
}

export const Paragraph: FC<{className?: string}> = ({children, className}) => {
  return <div className={cn(cs.paragraph, className)}>{children}</div>
}

export const List: FC<{className?: string}> = ({children, className}) => {
  return <ul className={cn(cs.list, className)}>{children}</ul>
}

export const ListItem: FC<{className?: string}> = ({children, className}) => {
  return <li className={cn(cs.listItem, className)}>{children}</li>
}

export function withPageContainer(Page: FC): FC<PageProps> {
  return props => (
    <PageContainer {...props}>
      <Page />
    </PageContainer>
  )
}

export default PageContainer
