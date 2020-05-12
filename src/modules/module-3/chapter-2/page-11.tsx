import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph, Img} from "../../page-components"
import img from "./page-11.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle showBook>Bien-être : Attention aux arnaques !</Subtitle>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph>
        Le secteur du bien-être est en plein essor et de nombreux « gourous » en profitent pour
        répandre sur le marché, produits miracles, massages aux vertus transcendantes, cours de
        méditation express sur internet, promesses de bonheur…. Des escrocs peuvent se cacher sous
        de beaux titres de coachs, thérapeutes, formateurs… il faut être vigilant.
      </Paragraph>
    </PageContainer>
  )
}

export default Page
