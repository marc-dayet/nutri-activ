import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Grid, Img} from "../../page-components"
import img1 from "./page-1-1.png"
import img2 from "./page-1-2.png"

import cs from "./page-1.module.scss"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Grid className={cs.grid}>
        <Img src={img1} mode="avatar-lg" />
        <Paragraph className={cs.gridItemContentLeft}>
          Les liens entre
          <br />
          le bien-être, la qualité de vie, les émotions et la santé
        </Paragraph>
        <Img src={img2} mode="avatar-lg" />
        <Paragraph className={cs.gridItemContentRight}>
          Les liens entre compétences psychosociales et ressources personnelles :
          <br />
          savoir les identifier et prendre conscience de leur importance dans le Bien Vieillir
        </Paragraph>
      </Grid>
    </PageContainer>
  )
}

export default Page
