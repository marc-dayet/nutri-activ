import React, {FC} from "react"

import {Title, Subtitle, Paragraph} from "../../page-components"

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
        <img className={cs.image} src="#" alt="" />
        <Paragraph className={cs.paragraph}>Médecine Psychologie</Paragraph>
        <img className={cs.image} src="#" alt="" />
        <Paragraph className={cs.paragraph}>Psychologie</Paragraph>
        <img className={cs.image} src="#" alt="" />
        <Paragraph className={cs.paragraph}>Education pour la santé</Paragraph>
        <img className={cs.image} src="#" alt="" />
        <Paragraph className={cs.paragraph}>
          Activité physique adaptée et pratiques de larelaxation
        </Paragraph>
        <img className={cs.image} src="#" alt="" />
        <Paragraph className={cs.paragraph}>Ethique de l’intervention</Paragraph>
      </div>
    </>
  )
}

export default Page
