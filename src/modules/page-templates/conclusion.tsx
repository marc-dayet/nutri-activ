import React, {FC} from "react"

import PageContainer from "../page"
import {Title, Paragraph, Img} from "../page-components"

import cs from "./conclusion.module.scss"
console.log(cs)

type PageConclusionProps = {
  title: string
  img: string
}

const PageConclusion: FC<PageConclusionProps> = ({title, img}) => {
  return (
    <PageContainer>
      <Title>{title}</Title>
      <Paragraph>
        <Img src={img} className={cs.img} mode="fullscreen" />
      </Paragraph>
    </PageContainer>
  )
}

export default PageConclusion
