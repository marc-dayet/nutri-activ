import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Img} from "../../page-components"
import img from "./page-7-1.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les 5 modules de la formation distancielle</Title>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </PageContainer>
  )
}

export default Page
