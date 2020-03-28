import React, {FC} from "react"

import {Title, Paragraph} from "../../page-container"

import cs from "./page-6.module.scss"

const Page: FC = () => {
  return (
    <>
      <Title>Formation distancielle</Title>
      <img className={cs.image} src="#" alt="" />
      <Paragraph className={cs.paragraph}>
        <strong>2. Le livret ressources pour approfondir vos connaissances</strong> tout au long de
        la lecture du distanciel informatique. Le livret vous permet de trouver des éléments
        complémentaires au distanciel et de vous aider à répondre aux quizz du distanciel.
      </Paragraph>
      <br />
      <Paragraph className={cs.paragraph}>
        Le temps de formation pour l’appropriation des connaissances (distanciel + livret
        ressources) et la saisie des réponses au questionnaire est évalué à environ 2h45 par module.
        Soit un total d’environ 13h30 pour réaliser la totalité du distanciel.
      </Paragraph>
    </>
  )
}

export default Page