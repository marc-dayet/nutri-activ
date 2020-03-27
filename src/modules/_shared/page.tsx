import React, {FC} from "react"
import range from "lodash/fp/range"

import cs from "./page.module.scss"

export type PageProps = {
  currPage: number
  nbPages: number
  prevPage: () => void
  nextPage: () => void
  nbChapters: number
  setChapter: (chapter: number) => void
}

const PageContainer: FC<PageProps> = props => {
  const {currPage, nbPages, prevPage, nextPage, nbChapters, setChapter} = props

  return (
    <>
      <div className={cs.pagination}>
        Page {currPage}/{nbPages}
      </div>
      {props.children}
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
            <button key={chapter} className={cs.chapter} onClick={() => setChapter(chapter)}>
              {chapter}
            </button>
          ))}
        </div>
      </footer>
    </>
  )
}

export function withPageContainer(Page: FC): FC<PageProps> {
  return props => (
    <PageContainer {...props}>
      <Page />
    </PageContainer>
  )
}

export default PageContainer
