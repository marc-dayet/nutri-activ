import React, {FC} from "react"

import {withPageContainer} from "../../_shared/page"

import cs from "./page-2.module.scss"

const Page: FC = () => {
  return (
    <>
      <h1 className={cs.title}>Le module introductif Cap bien-être :</h1>
      <div className={cs.grid}>
        <img className={cs.image} src="#" alt="" />
        <div className={cs.paragraph}>Présentation de la formation distancielle</div>
        <img className={cs.image} src="#" alt="" />
        <div className={cs.paragraph}>
          Les fondements et les contenus clés sur lesquels repose le parcours Cap Bien-être.
        </div>
        <img className={cs.image} src="#" alt="" />
        <div className={cs.paragraph}>
          De la formation distancielle à la formation présentielle : vos questions aux formateurs.
        </div>
      </div>
    </>
  )
}

export default withPageContainer(Page)
