import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph, Img} from "../../page-components"
import img from "./page-2.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>3. Ce que doit transmettre l’animateur au groupe durant l’étape</Title>
      <Subtitle>Pour maintenir le cap vers le bien-être</Subtitle>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </PageContainer>
  )
}

export default Page
