import React, {FC, useState} from "react"
import {useBehaviorSubject} from "react-captain"
import cn from "classnames"
import range from "lodash/fp/range"

import {theme$} from "../theme"
import {Title, Paragraph} from "./page-components"
import PageButton from "./page-components/button"
import ChapterButton from "./page-components/chapter-button"
import {steps, currStep$, lastStep$, saveLastStep, isFirstStep, isLastStep} from "./context"
import {ReactComponent as Check} from "./page-components/quiz-check.svg"
import {ReactComponent as AnswerBlock} from "./page-components/quiz-answer.svg"
import {ReactComponent as OverlayTrue} from "./page-components/quiz-check-true.svg"
import {ReactComponent as OverlayFalse} from "./page-components/quiz-check-false.svg"

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
  const [step] = useBehaviorSubject(currStep$, () => window.scrollTo({top: 0}))
  const [lastStep] = useBehaviorSubject(lastStep$)
  const [theme] = useBehaviorSubject(theme$)
  const nbChapters = Object.values(steps[step.module]).length
  const nbPages = countPagesTill()
  const currPage = countPagesTill(step.chapter) + step.page
  const [isQuizTouched, touchQuiz] = useState<boolean | undefined>(undefined)
  const [isQuizAnswered, answerQuiz] = useState(false)

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

  function quizNext() {
    if (isQuizAnswered) {
      nextPage()
    } else {
      answerQuiz(true)
    }
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
          <footer className={cs.pageNavigation}>
            <div className={cs.pages}>
              <PageButton onClick={prevPage} disabled={isFirstStep(step)}>
                Précédent
              </PageButton>
              <PageButton onClick={nextPage} disabled={isLastStep(step)}>
                Suivant
              </PageButton>
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
            <div className={cs.quizRadiosContainer}>
              <label className={cs.quizRadioContainer}>
                <span className={cs.quizRadio}>
                  <input type="radio" name="quiz" onChange={() => touchQuiz(true)} />
                  <Check className={cs.quizCheck} />
                  {isQuizAnswered && props.isTrue && (
                    <OverlayTrue className={cn(cs.quizCheckOverlay, cs.success)} />
                  )}
                  {isQuizAnswered && !props.isTrue && (
                    <OverlayFalse className={cn(cs.quizCheckOverlay, cs.error)} />
                  )}
                  VRAI
                </span>
              </label>
              <label className={cs.quizRadioContainer}>
                <span className={cs.quizRadio}>
                  <input type="radio" name="quiz" onChange={() => touchQuiz(false)} />
                  <Check className={cs.quizCheck} />
                  {isQuizAnswered && !props.isTrue && (
                    <OverlayTrue className={cn(cs.quizCheckOverlay, cs.success)} />
                  )}
                  {isQuizAnswered && props.isTrue && (
                    <OverlayFalse className={cn(cs.quizCheckOverlay, cs.error)} />
                  )}
                  FAUX
                </span>
              </label>
            </div>
            <div className={cn(cs.quizAnswerContainer, {[cs.deployed]: isQuizAnswered})}>
              <h2 className={cn(cs.quizSubtitle, theme.secondary)}>Réponse</h2>
              <Paragraph className={cs.quizAnswerTextContainer}>
                <span className={cs.quizAnswerText}>{props.answer}</span>
                <AnswerBlock className={cn(cs.quizAnswerBlock, theme.secondary)} />
              </Paragraph>
            </div>
            <div className={cs.quizPages}>
              <PageButton onClick={prevPage}>Précédent</PageButton>
              <PageButton onClick={quizNext} disabled={isQuizTouched === undefined}>
                Suivant
              </PageButton>
            </div>
            <footer className={cs.quizNavigation}>
              <div className={cs.pages}>
                <PageButton onClick={prevPage}>Précédent</PageButton>
                <PageButton onClick={quizNext} disabled={isQuizTouched === undefined}>
                  Suivant
                </PageButton>
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
          <div className={cs.quizChapters}>
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
        </div>
      )

    default:
      return null
  }
}

export default PageContainer
