import React, {FC} from "react"

import {Title, Grid, Img} from "../../page-components"
import img1 from "./page-1-1.png"
import img2 from "./page-1-2.png"

import cs from "./page-1.module.scss"

const Page: FC = () => {
  return (
    <>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Grid className={cs.grid}>
        <Img src={img1} mode="avatar-lg" />
        <div className={cs.gridItemContentLeft}>
          <strong>Les liens entre</strong>
          <br />
          le bien-être, la qualité de vie, les émotions et la santé
        </div>
        <Img src={img2} mode="avatar-lg" />
        <div className={cs.gridItemContentRight}>
          <strong>Les liens entre compétences psychosociales et ressources personnelles :</strong>
          <br />
          savoir les identifier et prendre conscience de leur importance dans le Bien Vieillir
        </div>
      </Grid>
    </>
  )
}

export default Page
