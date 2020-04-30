import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph} from "../../page-components"
import image1 from "./page-2-1.png"
import image2 from "./page-2-2.png"

import cs from "./page-2.module.scss"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Présentation de la formation distancielle Cap Bien-être</Title>
      <Subtitle>Qu’est ce que le distanciel va vous apporter ?</Subtitle>
      <div className={cs.grid}>
        <img className={cs.image} src={image1} alt="" />
        <Paragraph className={cs.paragraph}>
          <strong>Objectifs du distanciel :</strong>
          <br />
          Vous aider à acquérir un socle commun de connaissances sur la gestion du stress et des
          émotions vous préparer au mieux à la formation présentielle
          <br />
          Vous amener à engager une première réflexion sur les fondements du parcours concernant
          notamment la gestion du stress et des émotions
        </Paragraph>
        <img className={cs.image} src={image2} alt="" />
        <Paragraph className={cs.paragraph}>
          <strong className={cs.paragraphHeader}>Le contenu du distanciel :</strong>
          <br />
          Les connaissances spécifiques à maîtriser par les animateurs
          <br />
          La présentation des messages clés à donner aux participants lors du parcours
        </Paragraph>
      </div>
    </PageContainer>
  )
}

export default Page
