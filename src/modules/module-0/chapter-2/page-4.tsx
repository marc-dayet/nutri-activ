import React, {FC} from "react"

import {Title, Paragraph, withPageContainer} from "../../page"

import cs from "./page-4.module.scss"

const Page: FC = () => {
  return (
    <>
      <Title>Formation distancielle</Title>
      <Paragraph className={cs.paragraph}>
        Prérequis obligatoire pour participer à la formation en présentiel, la formation en
        distanciel permet de maîtriser les savoirs, connaissances, principes, messages clés sur
        lesquels vous pourrez vous baser pour animer Cap Bien-être.
      </Paragraph>
      <Paragraph className={cs.paragraphAlt}>
        Vous avez à votre disposition 2 outils pour la formation à distance :
      </Paragraph>
      <img className={cs.image} src="#" alt="" />
    </>
  )
}

export default withPageContainer(Page)
