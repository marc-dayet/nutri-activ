import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Grid, Img} from "../../page-components"
import img from "./page-1.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Grid>
        <Img src={img} mode="avatar-lg" />
        <Paragraph>
          La définition du stress et les différents types de stress
          <br />
          Les principales sources de stress
          <br />
          Les mécanismes du stress
          <br />
          Les effets du stress sur la santé et plus particulièrement les effets du stress chronique
          <br />
          Les émotions associées au stress
          <br />
          Les façons de se comporter face aux situations stressantes
          <br />
          Comment gérer son stress et revenir au calme
          <br />
        </Paragraph>
      </Grid>
    </PageContainer>
  )
}

export default Page
