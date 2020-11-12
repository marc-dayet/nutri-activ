import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph, Img} from "../../page-components"
import img from "./page-3.png"

import cs from "./page-2.module.scss"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle className={cs.subtitle} showBook>
        La recherche sur le bien vieillir met en avant six critères communs au bien-être
        psychologique et au vieillissement réussi
      </Subtitle>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </PageContainer>
  )
}

export default Page
