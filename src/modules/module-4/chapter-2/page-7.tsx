import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Img} from "../../page-components"
import img from "./page-7.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Paragraph>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder>
        De nombreuses activités permettent de : calmer les effets du stress favoriser un état de
        bien-être physique et mental favoriser un état de bien-être social
      </Paragraph>
      <Paragraph>
        <strong>
          Pour maintenir les relations sociales dans la durée, il est conseillé de réfléchir en
          amont à ses propres besoins, ses envies et ses possibilités.
        </strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
