import React, {FC} from "react"
import {useBehaviorSubject} from "react-captain"
import range from "lodash/fp/range"

import {Title, Paragraph} from "./page-components"
import PageButton from "./page-components/button"
import ChapterButton from "./page-components/chapter-button"
import {steps, currStep$, lastStep$, saveLastStep} from "./context"
import {ReactComponent as Check} from "./page-components/quiz-check.svg"
import {ReactComponent as AnswerBlock} from "./page-components/quiz-answer.svg"

import cs from "./page.module.scss"

type PageContainerProps =
  | {
      layout?: "page"
    }
  | {
      layout: "quiz"
      title: string
      img: string
      statment: string
      answer: string
      isTrue: boolean
    }

const PageContainer: FC<PageContainerProps> = props => {
  const [step] = useBehaviorSubject(currStep$)
  const [lastStep] = useBehaviorSubject(lastStep$)
  const nbChapters = Object.values(steps[step.module]).length
  const nbPages = countPagesTill()
  const currPage = countPagesTill(step.chapter) + step.page

  function countPagesTill(end?: number) {
    return steps[step.module].slice(0, end).reduce((sum, pages) => sum + pages, 0)
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

  switch (props.layout) {
    case undefined:
    case "page":
      return (
        <div className={cs.pageContainer}>
          <div className={cs.pagePagination}>
            Page {currPage}/{nbPages}
          </div>
          <div className={cs.content}>{props.children}</div>
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

    case "quiz":
      return (
        <div className={cs.quizContainer}>
          <div className={cs.quizLeft}>
            <div className={cs.quizPagination}>
              Page {currPage}/{nbPages}
            </div>
            <Title className={cs.quizTitle}>{props.title}</Title>
            <div className={cs.quizImgContainer}>
              <img className={cs.quizImg} src={props.img} alt="" />
            </div>
            <Paragraph className={cs.quizStatment}>{props.statment}</Paragraph>
          </div>
          <div className={cs.quizRight}>
            <div>
              <label className={cs.quizRadio}>
                <input type="radio" name="quiz" value={1} />
                <Check className={cs.quizCheck} />
                VRAI
              </label>
              <label className={cs.quizRadio}>
                <input type="radio" name="quiz" value={0} />
                <Check className={cs.quizCheck} />
                FAUX
              </label>
            </div>
            <h2 className={cs.quizSubtitle}>Réponse</h2>
            <Paragraph className={cs.quizAnswerContainer}>
              <span className={cs.quizAnswer}>{props.answer}</span>
              <AnswerBlock className={cs.quizAnswerBlock} />
            </Paragraph>
          </div>
        </div>
      )

    default:
      return null
  }
}

export default PageContainer
