import React, {FC} from "react"

import {Title, Paragraph} from "../../page-components"
import image1 from "./page-3-1.png"
import image2 from "./page-3-2.png"
import image3 from "./page-3-3.png"

import cs from "./page-3.module.scss"

const Page: FC = () => {
  return (
    <>
      <Title>Comment est construit le distanciel de formation ?</Title>
      <div className={cs.grid}>
        <img className={cs.image} src={image1} alt="" />
        <Paragraph>Dans la formation distancielle, chaque séquence est intitulée Module.</Paragraph>
        <img className={cs.image} src={image2} alt="" />
        <Paragraph>Dans le parcours Cap Bien-être, chaque séance est intitulée Etape.</Paragraph>
        <img className={cs.image} src={image3} alt="" />
        <Paragraph>
          Dans les modules du distanciel, certaines notions ou concepts comportent une icône
          «livret» : ce visuel illustré ci-desus indique que les notions sont développées dans le
          livret ressources.
        </Paragraph>
      </div>
    </>
  )
}

export default Page
