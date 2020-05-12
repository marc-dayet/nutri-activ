import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components"
import img1 from "./page-2-1.png"
import img2 from "./page-2-2.png"
import img3 from "./page-2-3.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle showBook>
        Les compétences psychosociales, compétences de vie(life skills), se répartissent en 3
        grandes catégories :
      </Subtitle>
      <Subtitle showBook>Le bien-être</Subtitle>
      <Grid>
        <Img src={img1} mode="avatar-lg" />
        <Paragraph>
          <strong>Les compétences cognitives</strong>
          <br />
          Résolutions de problèmes, prise de décision, pensée critique
        </Paragraph>
        <Img src={img2} mode="avatar-lg" />
        <Paragraph>
          <strong>Les compétences émotionnelles :</strong>
          <br />
          Gestion du stress, gestion des émotions, confiance en soi, estime de soi
        </Paragraph>
        <Img src={img3} mode="avatar-lg" />
        <Paragraph>
          <strong>Les compétences sociales :</strong>
          <br />
          Communication, empathie, coopération, relations
        </Paragraph>
      </Grid>
    </PageContainer>
  )
}

export default Page
