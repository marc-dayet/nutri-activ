import React, {FC} from "react"

import {Title, Paragraph, List, ListItem} from "../../page-container"

import cs from "./page-5.module.scss"

const Page: FC = () => {
  return (
    <>
      <Title>Formation distancielle</Title>
      <img className={cs.image} src="#" alt="" />
      <Paragraph className={cs.paragraph}>
        <strong>1. Le distanciel informatique comprenant :</strong>
      </Paragraph>
      <List>
        <ListItem>1 module introductif,</ListItem>
        <ListItem>
          4 modules en lien avec les 4 premières étapes du programme. La 5ème étape, «Garder le cap»
          sera vue uniquement en formation présentielle.
        </ListItem>
        <ListItem>Des quizz «Vrai/Faux» pour tester vos connaissances.</ListItem>
        <ListItem>
          1 questionnaire en ligne à remplir à la fin de chaque module pour transmettre vos
          interrogations au formateur avant la formation présentielle. Vous pouvez noter vos
          questions au fur et à mesure du distanciel et les reporter ensuite dans le questionnaire
          de fin de module.
        </ListItem>
      </List>
    </>
  )
}

export default Page