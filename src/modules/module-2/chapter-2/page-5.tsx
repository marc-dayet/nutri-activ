import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Img} from "../../page-components"
import img from "./page-5.png"

import cs from "./page-5.module.scss"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <div className={cs.imgContainer}>
        <Img src={img} mode="fullscreen" />
      </div>
    </PageContainer>
  )
}

export default Page
