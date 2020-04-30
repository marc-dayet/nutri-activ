import React, {FC} from "react"

import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components"
import img1 from "./page-3-1.png"
import img2 from "./page-3-2.png"
import img3 from "./page-3-3.png"
import img4 from "./page-3-4.png"
import img5 from "./page-3-5.png"

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
      <Grid>
        <Img src={img1} mode="round-lg" />
        <Paragraph className={cs.paragraph}>Médecine Psychologie</Paragraph>
        <Img src={img2} mode="round-lg" />
        <Paragraph className={cs.paragraph}>Psychologie</Paragraph>
        <Img src={img3} mode="round-lg" />
        <Paragraph className={cs.paragraph}>Education pour la santé</Paragraph>
        <Img src={img4} mode="round-lg" />
        <Paragraph className={cs.paragraph}>
          Activité physique adaptée et pratiques de larelaxation
        </Paragraph>
        <Img src={img5} mode="round-lg" />
        <Paragraph className={cs.paragraph}>Ethique de l’intervention</Paragraph>
      </Grid>
    </>
  )
}

export default Page
