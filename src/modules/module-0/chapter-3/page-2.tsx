import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, List, ListItem} from "../../page-components"

import cs from "./page-2.module.scss"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Le parcours Cap Bien-Être</Title>
      <Paragraph className={cs.paragraph}>
        <strong>Quel est l’objectif du parcours ?</strong>
      </Paragraph>
      <List>
        <ListItem>
          Rendre les participants autonomes dans la mobilisation de leurs compétences psychosociales
          pour la gestion du stress et de leurs émotions au quotidien.
        </ListItem>
      </List>
      <Paragraph className={cs.paragraph}>
        <strong>Pourquoi avoir créé ce parcours ?</strong>
      </Paragraph>
      <List>
        <ListItem>
          La prévention et la promotion de la santé auprès des seniors est une des priorités du
          ministère de la santé et des organismes de protection sociale.
        </ListItem>
        <ListItem>
          Les programmes et actions se concentrent sur la santé physique et offrent peu de place à
          la santé mentale et au bien-être.
        </ListItem>
        <ListItem>
          L’Organisation Mondiale de la Santé (OMS) souligne que la santé mentale et le bien-être
          sont aussi importants pendant la vieillesse qu’à tout autre moment de la vie.
        </ListItem>
        <ListItem>
          La stratégie Nationale de Santé 2018/2022 pointe l’intérêt de travailler les compétences
          psychosociales pour aider au développement personnel et contribuer au Bien Vieillir. Parmi
          les facteurs de risque de problèmes de santé chez les seniors, l’OMS cite le stress et ses
          effets négatifs sur la santé.
        </ListItem>
      </List>
    </PageContainer>
  )
}

export default Page
