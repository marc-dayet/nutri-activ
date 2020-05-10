import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Img} from "../../page-components"
import img from "./page-6-1.png"

import cs from "./page-6.module.scss"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Formation distancielle</Title>
      <Paragraph>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph className={cs.paragraph}>
        <strong>2. Le livret ressources pour approfondir vos connaissances</strong> tout au long de
        la lecture du distanciel informatique. Le livret vous permet de trouver des éléments
        complémentaires au distanciel et de vous aider à répondre aux quizz du distanciel.
      </Paragraph>
      <br />
      <Paragraph className={cs.paragraph}>
        Le temps de formation pour l’appropriation des connaissances (distanciel + livret
        ressources) et la saisie des réponses au questionnaire est évalué à environ 2h30 par module.
        Soit un total d’environ 12h30 pour réaliser la totalité du distanciel.
      </Paragraph>
    </PageContainer>
  )
}

export default Page
