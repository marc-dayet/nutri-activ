import React, {FC} from "react"

import {Title, Paragraph, Img} from "../page-components"

type PageConclusionProps = {
  title: string
  image: string
}

const PageConclusion: FC<PageConclusionProps> = ({title, image: img}) => {
  return (
    <>
      <Title>{title}</Title>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </>
  )
}

export default PageConclusion
