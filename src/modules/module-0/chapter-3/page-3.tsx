import React, {FC} from "react"

import {Title, Subtitle, Paragraph} from "../../page-components"
import image1 from "./page-3-1.png"
import image2 from "./page-3-2.png"
import image3 from "./page-3-3.png"
import image4 from "./page-3-4.png"
import image5 from "./page-3-5.png"

import cs from "./page-3.module.scss"

const Page: FC = () => {
  return (
    <>
      <Title>Les contenus clés travaillés durant le parcours Cap Bien-être</Title>
      <Subtitle className={cs.subtitle}>
        Quelles sont les disciplines concernées par le parcours ?
      </Subtitle>
      <Paragraph className={cs.paragraph}>
        Le contenu du parcours provient de l’apport des 5 disciplines suivantes :
      </Paragraph>
      <div className={cs.grid}>
        <img className={cs.image} src={image1} alt="" />
        <Paragraph className={cs.paragraph}>Médecine Psychologie</Paragraph>
        <img className={cs.image} src={image2} alt="" />
        <Paragraph className={cs.paragraph}>Psychologie</Paragraph>
        <img className={cs.image} src={image3} alt="" />
        <Paragraph className={cs.paragraph}>Education pour la santé</Paragraph>
        <img className={cs.image} src={image4} alt="" />
        <Paragraph className={cs.paragraph}>
          Activité physique adaptée et pratiques de larelaxation
        </Paragraph>
        <img className={cs.image} src={image5} alt="" />
        <Paragraph className={cs.paragraph}>Ethique de l’intervention</Paragraph>
      </div>
    </>
  )
}

export default Page
