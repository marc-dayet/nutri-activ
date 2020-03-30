import React, {FC} from "react"

import {Title, Paragraph} from "../../page-components"

import cs from "./page-2.module.scss"

const Page: FC = () => {
  return (
    <>
      <Title>Le module introductif Cap bien-être :</Title>
      <div className={cs.grid}>
        <img className={cs.image} src="#" alt="" />
        <Paragraph>Présentation de la formation distancielle</Paragraph>
        <img className={cs.image} src="#" alt="" />
        <Paragraph>
          Les fondements et les contenus clés sur lesquels repose le parcours Cap Bien-être.
        </Paragraph>
        <img className={cs.image} src="#" alt="" />
        <Paragraph>
          De la formation distancielle à la formation présentielle : vos questions aux formateurs.
        </Paragraph>
      </div>
    </>
  )
}

export default Page
