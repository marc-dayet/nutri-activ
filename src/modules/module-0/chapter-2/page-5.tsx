import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, List, ListItem, Img} from "../../page-components"
import img from "./page-5-1.png"

import cs from "./page-5.module.scss"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Formation distancielle</Title>
      <Paragraph>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
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
    </PageContainer>
  )
}

export default Page
