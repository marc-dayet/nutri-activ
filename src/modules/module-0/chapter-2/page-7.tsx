import React, {FC} from "react"

import {Title, withPageContainer} from "../../page"

import cs from "./page-7.module.scss"

const Page: FC = () => {
  return (
    <>
      <Title>Les 5 modules de la formation distancielle</Title>
      <img className={cs.image} src="#" alt="" />
    </>
  )
}

export default withPageContainer(Page)
