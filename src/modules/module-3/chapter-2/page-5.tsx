import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Img} from "../../page-components"
import img from "./page-5.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder align="left">
        Les émotions positives s’enrichissent, s’accumulent : Elles nous permettent de faire de bons
        choix, d’être mieux intégré et d’avoir une meilleure santé. Elles permettent une meilleure
        résistance au stress.
      </Paragraph>
      <Paragraph align="left">
        <strong>
          On peut apprendre à cultiver les émotions positives, en augmentant leur fréquence, leur
          intensité et leur durée.
        </strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
