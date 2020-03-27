import React, {FC} from "react"

import {withPageContainer} from "../../_shared/page"

import cs from "./page-2.module.scss"

const Page: FC = () => {
  return (
    <>
      <h1 className={cs.title}>Présentation de la formation distancielle Cap Bien-être</h1>
      <h2 className={cs.subtitle}>Qu’est ce que le distanciel va vous apporter ?</h2>
      <div className={cs.grid}>
        <img className={cs.image} src="#" alt="" />
        <div>
          <strong className={cs.paragraphHeader}>Objectifs du distanciel :</strong>
          <div className={cs.paragraph}>
            Vous aider à acquérir un socle commun de connaissances sur la gestion du stress et des
            émotions vous préparer au mieux à la formation présentielle
            <br />
            Vous amener à engager une première réflexion sur les fondements du parcours concernant
            notamment la gestion du stress et des émotions
          </div>
        </div>
        <img className={cs.image} src="#" alt="" />
        <div>
          <strong className={cs.paragraphHeader}>Le contenu du distanciel :</strong>
          <div className={cs.paragraph}>
            Les connaissances spécifiques à maîtriser par les animateurs
            <br />
            La présentation des messages clés à donner aux participants lors du parcours
          </div>
        </div>
      </div>
    </>
  )
}

export default withPageContainer(Page)
