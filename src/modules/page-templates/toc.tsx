import React, {FC} from "react";
import {useObservable} from "@soywod/react-use-observable";

import PageContainer from "../page";
import {currStep$} from "../context";
import {Title} from "../page-components";

import cs from "./toc.module.scss";

const TableOfContent: FC = () => {
  const [step] = useObservable(currStep$, currStep$.value);

  return (
    <PageContainer>
      <Title className={cs.title}>Séquences du module de formation</Title>
      <ol className={cs.list}>
        <li className={cs.listItem}>Objectifs et contenu de l’étape {step.module}</li>
        <li className={cs.listItem}>Ce que doit savoir l’animateur pour préparer le voyage</li>
        <li className={cs.listItem}>
          Ce que doit transmettre l’animateur au groupe durant l’étape
        </li>
        <li className={cs.listItem}>Quizz Vrai/Faux du module {step.module}</li>
        <li className={cs.listItem}>Accéder au questionnaire « Retours sur le distanciel »</li>
      </ol>
    </PageContainer>
  );
};

export default TableOfContent;
