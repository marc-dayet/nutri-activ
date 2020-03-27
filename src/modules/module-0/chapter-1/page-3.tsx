import React, {FC} from "react"

import {withPageContainer} from "../../_shared/page"

import cs from "./page-3.module.scss"

const Page: FC = () => {
  return (
    <>
      <h1 className={cs.title}>Présentation de la formation distancielle Cap Bien-être</h1>
    </>
  )
}

export default withPageContainer(Page)
