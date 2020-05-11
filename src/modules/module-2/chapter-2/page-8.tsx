import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components"
import img1 from "./page-8-1.png"
import img2 from "./page-8-2.png"
import img3 from "./page-8-3.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle showBook>Les façons de se comporter face au stress </Subtitle>
      <Grid padder>
        <Img src={img1} mode="avatar-lg" />
        <Paragraph>
          <strong>Réactions centrées sur le problème</strong>, qui visent la recherche de solutions
          pour transformer la situation.
        </Paragraph>
        <Img src={img2} mode="avatar-lg" />
        <Paragraph>
          <strong>Réactions centrées sur l’émotion</strong>, qui permettent l’expression du
          ressenti, et parfois l’évitement provisoire de la situation.
        </Paragraph>
        <Img src={img3} mode="avatar-lg" />
        <Paragraph>
          <strong>Recherche de soutien</strong>, que ce soit pour tenter de régler le problème ou
          trouver du réconfort.
        </Paragraph>
      </Grid>
      <br />
      <Paragraph>
        <strong>
          Les réactions centrées sur le problème et la recherche de soutien sont plus efficaces, et
          renforcent la capacité à résister malgré les difficultés.
        </strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
