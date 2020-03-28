import React, {FC} from "react"

import {Title, Paragraph} from "../../page-container"

import cs from "./page-4.module.scss"

const Page: FC = () => {
  return (
    <>
      <Title>Les contenus clés travaillés durant le parcours Cap Bien-être</Title>
      <Paragraph className={cs.paragraph}>
        Pourquoi connaître les contenus clés sur lesquels repose le parcours ? Connaître les
        principaux apports des disciplines scientifiques et techniques concernées sur le sujet, vous
        permettra de :
      </Paragraph>
      <div className={cs.grid}>
        <img className={cs.image} src="#" alt="" />
        <Paragraph className={cs.paragraph}>
          Mieux comprendre la philosophie générale du parcours
        </Paragraph>
        <img className={cs.image} src="#" alt="" />
        <Paragraph className={cs.paragraph}>
          Comprendre l’aspect pluridisciplinaire de la gestion du stress
        </Paragraph>
        <img className={cs.image} src="#" alt="" />
        <Paragraph className={cs.paragraph}>Vous apporter les connaissances nécessaires</Paragraph>
        <img className={cs.image} src="#" alt="" />
        <Paragraph className={cs.paragraph}>
          Être à l’aise avec la transmission de connaissances aux participants
        </Paragraph>
      </div>
      <Paragraph className={cs.paragraph}>
        Le distanciel et le livret ressources vous présentent les connaissances validées pour chaque
        discipline et vous permettent ainsi de mieux comprendre leur apport dans la gestion du
        stress et des émotions.
      </Paragraph>
    </>
  )
}

export default Page
