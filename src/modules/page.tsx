import React, {FC} from "react"
import cn from "classnames"
import range from "lodash/fp/range"

import cs from "./page.module.scss"

export type PageProps = {
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
    currPage,
    nbPages,
    prevPage,
    nextPage,
    currChapter,
    nbChapters,
    setChapter,
    children,
  } = props

  return (
    <div className={cs.container}>
      <div className={cs.pagination}>
        Page {currPage}/{nbPages}
      </div>
      <div className={cs.content}>{children}</div>
      <footer>
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

export const SubTitle: FC = ({children}) => {
  return <h2 className={cs.subtitle}>{children}</h2>
}

export const Paragraph: FC<{className?: string}> = ({children, className = ""}) => {
  return <div className={cn(cs.paragraph, className)}>{children}</div>
}

export function withPageContainer(Page: FC): FC<PageProps> {
  return props => (
    <PageContainer {...props}>
      <Page />
    </PageContainer>
  )
}

export default PageContainer
