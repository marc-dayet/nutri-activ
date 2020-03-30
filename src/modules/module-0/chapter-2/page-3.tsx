import React, {FC} from "react"

import {Title, Paragraph} from "../../page-components"

import cs from "./page-3.module.scss"

const Page: FC = () => {
  return (
    <>
      <Title>Comment est construit le distanciel de formation ?</Title>
      <div className={cs.grid}>
        <img className={cs.image} src="#" alt="" />
        <Paragraph>Dans la formation distancielle, chaque séquence est intitulée Module.</Paragraph>
        <img className={cs.image} src="#" alt="" />
        <Paragraph>Dans le parcours Cap Bien-être, chaque séance est intitulée Etape.</Paragraph>
        <img className={cs.image} src="#" alt="" />
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
