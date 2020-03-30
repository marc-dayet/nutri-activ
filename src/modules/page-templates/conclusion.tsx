import React, {FC} from "react"

import {Title, Paragraph} from "../page-components"

import cs from "./conclusion.module.scss"

type PageConclusionProps = {
  title: string
  image: string
}

const PageConclusion: FC<PageConclusionProps> = ({title, image}) => {
  return (
    <>
      <Title>{title}</Title>
      <Paragraph>
        <img className={cs.image} src={image} alt="" />
      </Paragraph>
    </>
  )
}

export default PageConclusion
