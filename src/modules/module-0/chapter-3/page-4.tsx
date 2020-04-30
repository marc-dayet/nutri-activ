import React, {FC} from "react"

import {Title, Paragraph, Grid, Img} from "../../page-components"
import img1 from "./page-4-1.png"
import img2 from "./page-4-2.png"
import img3 from "./page-4-3.png"
import img4 from "./page-4-4.png"

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
      <Grid className={cs.grid}>
        <Img src={img1} mode="round-lg" />
        <Paragraph className={cs.paragraph}>
          Mieux comprendre la philosophie générale du parcours
        </Paragraph>
        <Img src={img2} mode="round-lg" />
        <Paragraph className={cs.paragraph}>
          Comprendre l’aspect pluridisciplinaire de la gestion du stress
        </Paragraph>
        <Img src={img3} mode="round-lg" />
        <Paragraph className={cs.paragraph}>Vous apporter les connaissances nécessaires</Paragraph>
        <Img src={img4} mode="round-lg" />
        <Paragraph className={cs.paragraph}>
          Être à l’aise avec la transmission de connaissances aux participants
        </Paragraph>
      </Grid>
      <Paragraph className={cs.paragraph}>
        Le distanciel et le livret ressources vous présentent les connaissances validées pour chaque
        discipline et vous permettent ainsi de mieux comprendre leur apport dans la gestion du
        stress et des émotions.
      </Paragraph>
    </>
  )
}

export default Page
