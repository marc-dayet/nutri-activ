import React, {FC} from "react"

import PageContainer from "../page"
import {Title, Paragraph, Img} from "../page-components"

type PageConclusionProps = {
  title: string
  img: string
}

const PageConclusion: FC<PageConclusionProps> = ({title, img}) => {
  return (
    <PageContainer>
      <Title>{title}</Title>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </PageContainer>
  )
}

export default PageConclusion
