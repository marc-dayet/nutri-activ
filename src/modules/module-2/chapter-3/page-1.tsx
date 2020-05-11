import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Grid, Img} from "../../page-components"
import img1 from "./page-1-1.png"
import img2 from "./page-1-2.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>3. Ce que doit transmettre l’animateur au groupe durant l’étape</Title>
      <Grid>
        <Img src={img1} mode="avatar-lg" />
        <Paragraph>
          Le stress chronique est impliqué dans de nombreuses pathologies. On peut apprendre à le
          repérer, l’accepter, le comprendre, le prévenir
        </Paragraph>
        <Img src={img2} mode="avatar-lg" />
        <Paragraph>
          On peut apprendre à gérer son stress. <br />
          L’analyse et l’anticipation, le retour au calme et la recherche de soutien sont des
          techniques efficaces, à la portée de chacun
        </Paragraph>
      </Grid>
    </PageContainer>
  )
}

export default Page
