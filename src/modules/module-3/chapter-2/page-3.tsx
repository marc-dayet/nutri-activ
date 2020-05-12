import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Img} from "../../page-components"
import img from "./page-3.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
        <div>
          <strong>
            Les émotions positives permettent d’enrichir nos ressources propres (connaissances,
            compétences, santé) et d’obtenir une meilleure satisfaction
          </strong>
        </div>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
