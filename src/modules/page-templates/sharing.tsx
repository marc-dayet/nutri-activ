import React, {FC} from "react"

import PageContainer from "../page"
import Title from "../page-components/title"
import List from "../page-components/list"
import ListItem from "../page-components/list-item"
import {ReactComponent as IconListItem} from "../page-components/list-item.svg"
import {ReactComponent as IconCurlyBrace} from "./curly-brace.svg"

import cs from "./sharing.module.scss"

const PageSharing: FC = () => {
  return (
    <PageContainer>
      <Title>5.Accéder au questionnaire « Retours sur le distanciel »</Title>
      <div className={cs.paragraphAlt}>
        <div className={cs.paragraphAltHeader}>Pour</div>
        <div className={cs.paragraphAltCurlyBraceContainer}>
          <IconCurlyBrace className={cs.paragraphAltCurlyBrace}></IconCurlyBrace>
        </div>
        <div className={cs.paragraphAltLineTop}>
          <IconListItem className={cs.paragraphAltBullet} />
          faire part de vos interrogations et remarques sur chaque module
        </div>
        <div className={cs.paragraphAltLineBottom}>
          <IconListItem className={cs.paragraphAltBullet} />
          demander à revenir sur certains points en formation présentielle
        </div>
      </div>
      <h2 className={cs.subtitle}>Cliquez sur le lien suivant :</h2>
      <div className={cs.linkContainer}>
        <a
          className={cs.link}
          href="https://fr.surveymonkey.com/r/M63GHMK"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://fr.surveymonkey.com/r/M63GHMK
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
  )
}

export default PageSharing
