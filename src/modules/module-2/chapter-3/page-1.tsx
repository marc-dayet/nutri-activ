import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Grid, Img} from "../../page-components"
import img1 from "./page-1-1.png"
import img2 from "./page-1-2.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>3. Ce que doit transmettre l’animateur au groupe durant l’étape</Title>
      <Grid direction="vertical">
        <Img src={img1} mode="avatar-md" />
        <Paragraph>
          La santé est un des piliers de la qualité de vie, aux côtés de la sécurité, des relations
          affectives et des ressources personnelles. <br />
          Développer ses ressources personnelles, c’est améliorer sa santé.
        </Paragraph>
        <Img src={img2} mode="avatar-md" />
        <Paragraph>
          Les émotions peuvent avoir des effets positifs ou négatifs sur la santé.
          <br />
          <strong>On peut apprendre à gérer ses émotions.</strong>
        </Paragraph>
      </Grid>
    </PageContainer>
  )
}

export default Page
