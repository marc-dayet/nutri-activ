import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Img} from "../../page-components"

import img from "./page-1.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>3. Ce que doit transmettre l’animateur au groupe durant l’étape</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder>
        Les émotions positives ont une réelle influence sur notre santé, sur le plan physique,
        mental et social.
        <br />
        <strong>
          On peut travailler sa santé émotionnelle comme on travaille sa souplesse ou sa musculature
        </strong>
      </Paragraph>
      <Paragraph>
        Il y a mille façons différentes de cultiver ses moments de bien-être.
        <br />
        <strong>Chacun peut trouver la sienne</strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
