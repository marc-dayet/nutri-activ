import React, {FC} from "react";
import {useObservable} from "@soywod/react-use-observable";
import cn from "classnames";

import {theme$} from "../../theme";
import PageContainer from "../page";
import Title from "../page-components/title";
import List from "../page-components/list";
import ListItem from "../page-components/list-item";
import {ReactComponent as IconCurlyBrace} from "./curly-brace.svg";

import cs from "./sharing.module.scss";

const PageSharing: FC = () => {
  const [theme] = useObservable(theme$, theme$.value);

  return (
    <PageContainer>
      <Title>Accéder au questionnaire « retour sur le distanciel »</Title>
      <div className={cn(cs.paragraphAlt, theme.secondary)}>
        <div className={cs.paragraphAltHeader}>Pour</div>
        <div className={cs.paragraphAltCurlyBraceContainer}>
          <IconCurlyBrace className={cs.paragraphAltCurlyBrace}></IconCurlyBrace>
        </div>
        <List className={cs.paragraphAltLineTop}>
          <ListItem>faire part de vos interrogations et remarques sur chaque module</ListItem>
        </List>
        <List className={cs.paragraphAltLineBottom}>
          <ListItem>demander à revenir sur certains points en formation présentielle</ListItem>
        </List>
      </div>
      <h2 className={cs.subtitle}>Cliquez sur le lien suivant :</h2>
      <div className={cs.linkContainer}>
        <a
          className={cn(cs.link, theme.secondary)}
          href="https://fr.surveymonkey.com/r/questionnaire-distanciel-nutri-activ"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://fr.surveymonkey.com
        </a>
      </div>
      <List className={cs.list}>
        <ListItem className={cs.listItem}>
          Si vous souhaitez le faire à l’issue de chaque module : utilisez impérativement le même
          ordinateur, cliquez sur « terminer » tout en bas du questionnaire pour mémoriser vos
          réponses et pour y retourner ultérieurement.
        </ListItem>
        <ListItem className={cs.listItem}>
          Si vous souhaitez le faire à la fin du distanciel : suivre ce même lien et n’oubliez pas
          de cliquer tout en bas du questionnaire sur « terminer » pour mémoriser vos réponses.
        </ListItem>
      </List>
    </PageContainer>
  );
};

export default PageSharing;
