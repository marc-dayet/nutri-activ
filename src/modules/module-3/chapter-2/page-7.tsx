import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Grid, Img} from "../../page-components"
import img1 from "./page-7-1.png"
import img2 from "./page-7-2.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Paragraph padder>On peut considérer le vieillissement sous 2 angles :</Paragraph>
      <Grid padder>
        <Img src={img1} mode="avatar-md" />
        <Paragraph>
          <strong>Celui de la perte et du déclin</strong>
          <br />
          (fragilité, vulnérabilité)
        </Paragraph>
        <Img src={img2} mode="avatar-md" />
        <Paragraph showBook>
          <strong>Celui du développement</strong>
          <br />
          (accomplissement, plénitude)
        </Paragraph>
      </Grid>
      <Paragraph padder>
        Cap Bien-être s’inscrit dans la vision du vieillissement comme une opportunité
        d’accomplissement personnel.
      </Paragraph>
      <Paragraph>
        <strong>
          Vieillir, c’est continuer à se développer : s’engager dans cette voie favorise le
          vieillissement en bonne santé et le maintien de l’autonomie.
        </strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
