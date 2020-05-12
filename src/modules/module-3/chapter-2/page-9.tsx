import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Grid, List, ListItem} from "../../page-components"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Paragraph padder>
        Pour l’Organisation Mondiale de la Santé, 10 compétences psychosociales sont reconnues pour
        permettre à chacun d’être plus en capacité de répondre de façon efficace et positive aux
        exigences et épreuves de la vie quotidienne :
      </Paragraph>
      <Grid padder>
        <List>
          <ListItem>Avoir une pensée critique</ListItem>
          <ListItem>Se connaître soi-même</ListItem>
          <ListItem>Savoir se faire comprendre</ListItem>
          <ListItem>Savoir résoudre les problèmes</ListItem>
          <ListItem>Savoir gérer le stress</ListItem>
        </List>
        <br />
        <List>
          <ListItem>Avoir une pensée créative</ListItem>
          <ListItem>Etre bienveillant avec les autres</ListItem>
          <ListItem>Savoir créer des relations</ListItem>
          <ListItem>Savoir prendre des décisions</ListItem>
          <ListItem>Savoir gérer les émotions</ListItem>
        </List>
        <br />
      </Grid>
      <Paragraph>
        <strong>
          Les compétences psychosociales peuvent se travailler à n’importe quel âge : il n’est
          jamais trop tard pour apprendre à faire face aux difficultés de la vie.
        </strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
