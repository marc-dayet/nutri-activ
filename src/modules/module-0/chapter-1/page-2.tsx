import React, {FC} from "react"

import {Title, Paragraph} from "../../page-components"
import image1 from "./page-2-1.png"
import image2 from "./page-2-2.png"
import image3 from "./page-2-3.png"

import cs from "./page-2.module.scss"

const Page: FC = () => {
  return (
    <>
      <Title>Le module introductif Cap bien-être :</Title>
      <div className={cs.grid}>
        <img className={cs.image} src={image1} alt="" />
        <Paragraph>Présentation de la formation distancielle</Paragraph>
        <img className={cs.image} src={image2} alt="" />
        <Paragraph>
          Les fondements et les contenus clés sur lesquels repose le parcours Cap Bien-être.
        </Paragraph>
        <img className={cs.image} src={image3} alt="" />
        <Paragraph>
          De la formation distancielle à la formation présentielle : vos questions aux formateurs.
        </Paragraph>
      </div>
    </>
  )
}

export default Page
