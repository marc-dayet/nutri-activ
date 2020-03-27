import React, {FC} from "react"

import {withPageContainer} from "../../_shared/page"

import cs from "./page-4.module.scss"

const Page: FC = () => {
  return (
    <>
      <h1 className={cs.title}>Formation distancielle</h1>
      <div className={cs.paragraph}>
        Prérequis obligatoire pour participer à la formation en présentiel, la formation en
        distanciel permet de maîtriser les savoirs, connaissances, principes, messages clés sur
        lesquels vous pourrez vous baser pour animer Cap Bien-être.
      </div>
      <div className={cs.paragraphAlt}>
        Vous avez à votre disposition 2 outils pour la formation à distance :
      </div>
      <img className={cs.image} src="#" alt="" />
    </>
  )
}

export default withPageContainer(Page)
