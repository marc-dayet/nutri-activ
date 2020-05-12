import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Img} from "../../page-components"
import img from "./page-2.png"

import cs from "./page-2.module.scss"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Paragraph>
        <Img className={cs.img} src={img} mode="fullscreen" />
        <div>
          <strong>
            Une émotion est dite positive quand le ressenti est agréable. Il en existe une large
            diversité
          </strong>
        </div>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
