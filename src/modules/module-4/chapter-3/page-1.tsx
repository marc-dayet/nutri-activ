import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Img} from "../../page-components"
import img from "./page-1.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title> 3. Ce que doit transmettre l’animateur au groupe durant l’étape </Title>
      <Paragraph>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder>
        Vivre des émotions positives à plusieurs renforce leur impact, et permet de mieux gérer les
        situations de stress.
        <br />
        <strong>
          Bien vivre avec les autres contribue à notre bien-être, il est important de pratiquer une
          activité collective.
        </strong>
      </Paragraph>
      <Paragraph>
        S’engager avec et pour les autres rend la vie plus riche et contribue à lui donner un sens.
        <br />
        <strong>Etre intégré socialement, c’est aussi être soutenu en cas de coup dur.</strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
