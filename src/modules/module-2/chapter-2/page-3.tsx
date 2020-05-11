import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components"
import img from "./page-3.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle showBook>Les principales sources de stress</Subtitle>
      <Grid>
        <Img src={img} mode="avatar-lg" />
        <div>
          <Paragraph>
            Certaines situations peuvent être des freins à la qualité de vie, influencer
            négativement un ou plusieurs piliers de la qualité de vie : des problèmes de voisinage
            impactent sur mon cadre de vie, la perte d’un proche impacte sur mes relations sociales…
            <br />
            Les seniors sont soumis aux tracas de la vie quotidienne mais certaines sources de
            stress sont spécifiques à l’avancée en âge : diminution de la force physique, perte de
            contrôle sur sa vie…
          </Paragraph>
          <br />
          <Paragraph>
            Le stress peut agir sur un ou plusieurs piliers de la qualité de la vie
          </Paragraph>
        </div>
      </Grid>
    </PageContainer>
  )
}

export default Page
