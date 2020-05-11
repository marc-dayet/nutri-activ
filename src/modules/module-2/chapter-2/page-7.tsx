import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components"
import img1 from "./page-7-1.png"
import img2 from "./page-7-2.png"
import img3 from "./page-7-3.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle showBook>Les émotions associées au stress :</Subtitle>
      <Paragraph padder>
        Face à une situation stressante, 3 types d’émotion peuvent être ressenties{" "}
      </Paragraph>
      <Grid padder>
        <Img src={img1} mode="avatar-lg" />
        <Paragraph>
          <strong>La peur</strong> qui peut déclencher la fuite
        </Paragraph>
        <Img src={img2} mode="avatar-lg" />
        <Paragraph>
          <strong>La colère</strong> qui peut conduire à la lutte
        </Paragraph>
        <Img src={img3} mode="avatar-lg" />
        <Paragraph>
          <strong>La tristesse</strong> qui peut se transformer en inhibition
        </Paragraph>
      </Grid>
      <br />
      <Paragraph>
        <strong>
          La peur, la colère, la tristesse sont les 3 émotions de base correspondant aux 3 types de
          réactions d’alarme.
        </strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
