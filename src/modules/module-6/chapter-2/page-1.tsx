import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Img} from "../../page-components"
import img from "./page-1.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph>
        En quoi bien vivre avec les autres est important pour la santé ?<br />
        Comment développer des relations positives avec les autres ?<br />
        Comment maintenir le cap vers le bien-être ?<br />
      </Paragraph>
    </PageContainer>
  )
}

export default Page
