import React, {FC} from "react"

import {withPageContainer} from "../../_shared/page"

import cs from "./page-3.module.scss"

const Page: FC = () => {
  return (
    <>
      <h1 className={cs.title}>Comment est construit le distanciel de formation ?</h1>
      <div className={cs.grid}>
        <img className={cs.image} src="#" alt="" />
        <div className={cs.paragraph}>
          Dans la formation distancielle, chaque séquence est intitulée Module.
        </div>
        <img className={cs.image} src="#" alt="" />
        <div className={cs.paragraph}>
          Dans le parcours Cap Bien-être, chaque séance est intitulée Etape.
        </div>
        <img className={cs.image} src="#" alt="" />
        <div className={cs.paragraph}>
          Dans les modules du distanciel, certaines notions ou concepts comportent une icône
          «livret» : ce visuel illustré ci-desus indique que les notions sont développées dans le
          livret ressources.
        </div>
      </div>
    </>
  )
}

export default withPageContainer(Page)
