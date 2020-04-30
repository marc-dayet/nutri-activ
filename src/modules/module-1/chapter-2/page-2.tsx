import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components"
import img from "./page-2.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle showBook>Le bien-être</Subtitle>
      <Grid>
        <Img src={img} mode="avatar-lg" />
        <div>
          <Paragraph>
            Etat agréable, de durée variable, procuré par la satisfaction des besoins du corps et
            par la tranquillité de l’esprit. Selon l’Organisation Mondiale de la Santé, pour être en
            parfaite santé, il faut pouvoir ressentir du bien-être.
          </Paragraph>
          <br />
          <Paragraph>Le bien-être est partie prenante de la santé.</Paragraph>
        </div>
      </Grid>
    </PageContainer>
  )
}

export default Page
