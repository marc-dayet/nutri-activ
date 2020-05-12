import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Grid, Img} from "../../page-components"
import img from "./page-1.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Grid>
        <Img src={img} mode="avatar-lg" />
        <Paragraph>
          Connaître les émotions positives, leur utilité et leur cycle
          <br />
          Le rôle des hormones dans les émotions positives
          <br />
          Les compétences et facteurs de protecteurs favorisant le vieillissement en bonne santé
          <br />
          Les techniques et activités permettant de favoriser les émotions positives et cultiver le
          bien-être
          <br />
          Les précautions à prendre pour éviter les pièges autour du bien-être
          <br />
        </Paragraph>
      </Grid>
    </PageContainer>
  )
}

export default Page
