import React, {FC} from "react"

import PageContainer from "../page"
import {Title, Paragraph, Img} from "../page-components"

import cs from "./conclusion.module.scss"

type PageConclusionProps = {
  img: string
}

const PageConclusion: FC<PageConclusionProps> = ({img, children}) => {
  return (
    <PageContainer>
      <Title>{children}</Title>
      <Paragraph>
        <Img src={img} className={cs.img} mode="fullscreen" />
      </Paragraph>
    </PageContainer>
  )
}

export default PageConclusion
