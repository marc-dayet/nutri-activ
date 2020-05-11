import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components"
import img from "./page-2.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle showBook>Le stress</Subtitle>
      <Grid>
        <Img src={img} mode="avatar-lg" />
        <Paragraph>
          Il est la réponse naturelle de notre corps à une situation qui nous agresse ou qui nous
          met au défi. Il entraîne des sensations souvent désagréables, voire douloureuses sur le
          plan physique et psychologique. Il existe différents types de stress selon son degré de
          gravité, d’intensité (drame, tracas), sa fréquence (aigu ou chronique). Le stress n’est
          cependant pas toujours négatif.
        </Paragraph>
      </Grid>
    </PageContainer>
  )
}

export default Page
