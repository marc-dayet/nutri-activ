import React, {FC} from "react"

import {Title} from "./page-container"

import cs from "./page-conclusion.module.scss"

type PageConclusionProps = {
  title: string
  image: string
}

const PageConclusion: FC<PageConclusionProps> = ({title, image}) => {
  return (
    <>
      <Title>{title}</Title>
      <img className={cs.image} src={image} alt="" />
    </>
  )
}

export default PageConclusion
