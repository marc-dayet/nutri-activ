import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components"
import img1 from "./page-9-1.png"
import img2 from "./page-9-2.png"
import img3 from "./page-9-3.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle showBook>Comment gérer son stress</Subtitle>
      <Grid padder>
        <Img src={img1} mode="avatar-md" />
        <Paragraph>
          <strong>Se faire aider, s’entourer</strong>
          <br />
          Demander de l’aide, raconter ce qui nous arrive, dire ce qu’on ressent… permet de diminuer
          le stress.
        </Paragraph>
        <Img src={img2} mode="avatar-md" />
        <Paragraph>
          <strong>Revenir au calme</strong>
          <br />
          Pratiquer une activité physique, occuper son esprit à autre chose, se concentrer sur sa
          respiration… permet d’apaiser les tensions.
        </Paragraph>
        <Img src={img3} mode="avatar-md" />
        <Paragraph>
          <strong>Analyser et anticiper</strong>
          <br />
          Eviter les situations à risque de stress, relativiser les conséquences, prévenir les
          situations stressantes… permet de mieux gérer le stress.
        </Paragraph>
      </Grid>
      <br />
      <Paragraph>
        <strong>
          Apprendre à gérer son stress permet de stopper les réactions physiques et émotionnelles
          pour éviter l’installation d’un stress chronique.
        </strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
