import React, {FC} from "react"

import PageContainer from "../page"
import {Title, Paragraph, Img} from "../page-components"

type PageConclusionProps = {
  title: string
  image: string
}

const PageConclusion: FC<PageConclusionProps> = ({title, image: img}) => {
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
