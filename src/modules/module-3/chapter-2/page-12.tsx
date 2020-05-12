import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph, Img} from "../../page-components"
import img from "./page-12.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle>Quelques conseils pour éviter les arnaques :</Subtitle>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder>
        Remonter à la source pour identifier la structure ou la personne, En parler à son entourage,
        ses proches, son médecin… Conserver un regard critique. En cas de doute ou d’escroquerie :
        contacter le service mis en place par le gouvernement : Info Escroqueries au 0 805 817 817
        (numéro gratuit)
      </Paragraph>
      <Paragraph>
        <strong>Garder l’esprit critique face aux méthodes et produits miracles.</strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
