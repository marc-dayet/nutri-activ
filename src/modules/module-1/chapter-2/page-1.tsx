import React, {FC} from "react"

import {Title, Grid} from "../../page-components"
import imgLeft from "./page-1-1.png"
import imgRight from "./page-1-2.png"

import cs from "./page-1.module.scss"

const Page: FC = () => {
  return (
    <>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Grid>
        <div className={cs.gridItem}>
          <img className={cs.img} src={imgLeft} alt="" />
          <div className={cs.gridItemContentLeft}>
            <strong>Les liens entre</strong>
            <br />
            le bien-être, la qualité de vie, les émotions et la santé
          </div>
        </div>
        <div className={cs.gridItem}>
          <img className={cs.img} src={imgRight} alt="" />
          <div className={cs.gridItemContentRight}>
            <strong>Les liens entre compétences psychosociales et ressources personnelles :</strong>
            <br />
            savoir les identifier et prendre conscience de leur importance dans le Bien Vieillir
          </div>
        </div>
      </Grid>
    </>
  )
}

export default Page
