import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Img} from "../../page-components"
import img from "./page-4.png"

import cs from "./page-4.module.scss"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle className={cs.subtitle}>
        Les éléments qui font la qualité de vie varient d’une personne à une autre mais ils peuvent
        être classés en 4 grands piliers
      </Subtitle>
      <div className={cs.imgContainer}>
        <Img src={img} mode="fullscreen" />
      </div>
    </PageContainer>
  )
}

export default Page
