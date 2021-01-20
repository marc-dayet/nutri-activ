import React, {FC, useState} from "react";
import {useObservable} from "@soywod/react-use-observable";
import cn from "classnames";
import range from "lodash/fp/range";

import {theme$} from "../theme";
import {Title, Subtitle, Paragraph} from "./page-components";
import {PageButtonLeft, PageButtonRight} from "./page-components/button";
import ChapterButton from "./page-components/chapter-button";
import {
  steps,
  currStep$,
  lastStep$,
  saveLastStep,
  isFirstStep,
  isLastStep,
  getTitle,
} from "./context";
import {ReactComponent as Check} from "./page-components/quiz-check.svg";
import {ReactComponent as AnswerBlock} from "./page-components/quiz-answer.svg";
import quizNoteTrue from "./page-components/quiz-note-true.png";
import quizNoteFalse from "./page-components/quiz-note-false.png";

import cs from "./page.module.scss";

type Choice = {
  isTrue: boolean;
  label: JSX.Element | string;
};

type PageContainerProps =
  | {
      layout?: "page";
    }
  | {
      layout: "quiz";
      title: string;
      img: string;
      statment: JSX.Element | string;
      choices: Choice[];
      answer: JSX.Element | string;
      hasMultipleChoices?: boolean;
    };

const PageContainer: FC<PageContainerProps> = (props) => {
  const hasMultipleChoices = (props.layout === "quiz" && props.hasMultipleChoices) || false;
  const hasOneValidAnswer =
    props.layout === "quiz" &&
    !hasMultipleChoices &&
    props.choices.length > 2 &&
    props.choices.filter((c) => c.isTrue).length === 1;
  const [step] = useObservable(currStep$, currStep$.value, () => window.scrollTo({top: 0}));
  const [lastStep] = useObservable(lastStep$, lastStep$.value);
  const [theme] = useObservable(theme$, theme$.value);
  const nbChapters = Object.values(steps[step.module]).length;
  const nbPages = countPagesTill();
  const currPage = countPagesTill(step.chapter) + step.page;
  const [choicesIndex, setChoicesIndex] = useState<number[]>([]);
  const [isQuizAnswered, answerQuiz] = useState(false);

  function isQuizCorrectlyAnswered() {
    const choices = props.layout === "quiz" ? props.choices : [];
    return choices.every((choice, idx) => choice.isTrue === choicesIndex.includes(idx));
  }

  function countPagesTill(end?: number) {
    return steps[step.module].slice(0, end).reduce((sum, pages) => sum + pages, 0);
  }

  function prevPage() {
    let prevModule = step.module;
    let prevChapter = step.chapter;
    let prevPage = step.page - 1;

    if (prevPage < 1) {
      prevChapter -= 1;
      prevPage = steps[step.module][prevChapter];
    }

    if (prevChapter < 1) {
      prevModule -= 1;
      prevChapter = steps[prevModule].length - 1;
      prevPage = steps[prevModule][prevChapter];
    }

    if (prevModule < 0) {
      return;
    }

    currStep$.next({module: prevModule, chapter: prevChapter, page: prevPage});
  }

  function nextPage() {
    let nextModule = step.module;
    let nextChapter = step.chapter;
    let nextPage = step.page + 1;

    if (nextPage > steps[step.module][step.chapter]) {
      nextChapter += 1;
      nextPage = 1;
    }

    if (nextChapter >= steps[step.module].length) {
      nextModule += 1;
      nextChapter = 1;
      nextPage = 1;
    }

    if (nextModule >= steps.length) return;
    if (nextChapter >= steps[nextModule].length) return;
    if (nextPage > steps[nextModule][nextChapter]) return;

    currStep$.next({module: nextModule, chapter: nextChapter, page: nextPage});
    saveLastStep(nextModule, nextChapter, nextPage);
  }

  function quizNext() {
    if (isQuizAnswered) {
      nextPage();
    } else {
      answerQuiz(true);
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
      currStep$.next({...step, chapter: nextChapter, page: 1});
    }
  }

  function selectChoice(nextIndex: number) {
    return (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (props.layout === "quiz") {
        setChoicesIndex((prevIndexes) =>
          evt.target.checked
            ? hasMultipleChoices
              ? [nextIndex, ...prevIndexes]
              : [nextIndex]
            : prevIndexes.filter((index) => index !== nextIndex),
        );
      }
    };
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
              <PageButtonLeft onClick={prevPage} disabled={isFirstStep(step)} />
              <PageButtonRight onClick={nextPage} disabled={isLastStep(step)} />
            </div>
            <div className={cs.chapters}>
              {range(1, nbChapters + 1).map((chapter) => (
                <ChapterButton
                  key={chapter}
                  isActive={chapter === step.chapter}
                  onClick={() => setChapter(chapter)}
                  disabled={step.module >= lastStep.module && chapter > lastStep.chapter}
                  title={getTitle(step, chapter)}
                >
                  {chapter}
                </ChapterButton>
              ))}
            </div>
          </footer>
        </div>
      );

    case "quiz":
      return (
        <div className={cs.quizContainer}>
          <div className={cs.quizLeft}>
            <Title className={cs.quizTitle}>{props.title}</Title>
            <div className={cs.quizImgContainer}>
              <img className={cs.quizImg} src={props.img} alt="" />
            </div>
            <Paragraph className={cs.quizStatment}>{props.statment}</Paragraph>
          </div>
          <div className={cs.quizRight}>
            <div className={cs.quizRadiosContainer}>
              <div className={cs.quizPagination}>
                Page {currPage}/{nbPages}
              </div>
              {hasMultipleChoices && (
                <Subtitle className={cs.quizMultipleTitle}>
                  Choisissez la ou les bonnes réponses
                </Subtitle>
              )}
              {hasOneValidAnswer && (
                <Subtitle className={cs.quizMultipleTitle}>Choisissez la bonne réponse</Subtitle>
              )}
              <div className={cs.quizRadiosSubcontainer}>
                <img
                  className={cn(cs.quizNote, {[cs.quizNoteVisible]: isQuizAnswered})}
                  src={isQuizCorrectlyAnswered() ? quizNoteTrue : quizNoteFalse}
                  alt=""
                />
                {props.choices.map((choice, index) => (
                  <label key={index} className={cs.quizRadioContainer}>
                    <span className={cs.quizRadio}>
                      <input
                        type="checkbox"
                        name="quiz"
                        onChange={selectChoice(index)}
                        checked={choicesIndex.includes(index)}
                        disabled={isQuizAnswered}
                      />
                      <Check className={cs.quizCheck} />
                      {choice.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className={cn(cs.quizAnswerContainer, {[cs.deployed]: isQuizAnswered})}>
              <h2 className={cn(cs.quizSubtitle, theme.secondary)}>Réponse</h2>
              <Paragraph className={cs.quizAnswerTextContainer}>
                <span className={cs.quizAnswerText}>{props.answer}</span>
                <AnswerBlock className={cn(cs.quizAnswerBlock, theme.secondary)} />
              </Paragraph>
            </div>
            <div className={cs.quizPages}>
              <PageButtonLeft onClick={prevPage} />
              <PageButtonRight onClick={quizNext} disabled={choicesIndex.length === 0} />
            </div>
            <footer className={cs.quizNavigation}>
              <div className={cs.pages}>
                <PageButtonLeft onClick={prevPage} />
                <PageButtonRight onClick={quizNext} disabled={choicesIndex.length === 0} />
              </div>
              <div className={cs.chapters}>
                {range(1, nbChapters + 1).map((chapter) => (
                  <ChapterButton
                    key={chapter}
                    isActive={chapter === step.chapter}
                    onClick={() => setChapter(chapter)}
                    disabled={step.module >= lastStep.module && chapter > lastStep.chapter}
                    title={getTitle(step, chapter)}
                  >
                    {chapter}
                  </ChapterButton>
                ))}
              </div>
            </footer>
          </div>
          <div className={cs.quizChapters}>
            {range(1, nbChapters + 1).map((chapter) => (
              <ChapterButton
                key={chapter}
                isActive={chapter === step.chapter}
                onClick={() => setChapter(chapter)}
                disabled={step.module >= lastStep.module && chapter > lastStep.chapter}
                title={getTitle(step, chapter)}
              >
                {chapter}
              </ChapterButton>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default PageContainer;
