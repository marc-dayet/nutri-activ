import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components"
import img1 from "./page-6-1.png"
import img2 from "./page-6-2.png"
import img3 from "./page-6-3.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle showBook>Les bénéfices des activités collectives</Subtitle>
      <Grid padder>
        <Img src={img1} mode="avatar-md" />
        <Paragraph>
          Faire une activité physique à plusieurs renforce la motivation et la régularité de
          l’activité
        </Paragraph>
        <Img src={img2} mode="avatar-md" />
        <Paragraph>
          Activité manuelle ou artistique à plusieurs permet de renforcer les liens, de produire
          quelque chose de collectif qui peut être utile et/ou faire plaisir à d’autres, de se
          réaliser ensemble.
        </Paragraph>
        <Img src={img3} mode="avatar-md" />
        <Paragraph>
          Faire un jeu collectif renforce la cohésion du groupe. Rire ensemble renforce le système
          immunitaire.
        </Paragraph>
      </Grid>
      <Paragraph>
        <strong>
          Entretenir sa vie sociale, vivre des émotions positives avec d’autres permet de garder le
          moral et la forme.
        </strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
