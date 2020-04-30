import React, {FC} from "react"

import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components"
import img from "./page-8.png"

const Page: FC = () => {
  return (
    <>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle showBook>Les émotions</Subtitle>
      <Grid>
        <Img src={img} mode="avatar-lg" />
        <div>
          <Paragraph>
            Une émotion est un état affectif bref et intense. C’est une réponse psychophysiologique,
            c’est-à-dire qu’elle fait appel tant à notre corps (sensations physiques) qu’à notre
            esprit (mémoire), à une stimulation sensorielle ou une modification de l’environnement.
            Les émotions peuvent être ressenties comme agréables et/ou désagréables.
            <br />
          </Paragraph>
          <br />
          <Paragraph>
            Les émotions peuvent influencer nos systèmes biologiques, nos organes, les fonctions de
            notre corps.
          </Paragraph>
        </div>
      </Grid>
    </>
  )
}

export default Page
