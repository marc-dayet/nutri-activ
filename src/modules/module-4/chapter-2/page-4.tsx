import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Grid, Img} from "../../page-components"
import img1 from "./page-4-1.png"
import img2 from "./page-4-2.png"
import img3 from "./page-4-3.png"

import cs from "./page-4.module.scss"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Grid padder>
        <Img src={img1} mode="avatar-md" />
        <Paragraph className={cs.paragraph} showBook>
          <strong>Les relations sociales </strong> <br />
          Le fait d’entretenir des relations de qualité ou non avec sa famille, son conjoint, ses
          amis, ses voisins… peuvent avoir de nombreux effets sur la santé et le bien-être des
          individus.
        </Paragraph>
        <Img src={img2} mode="avatar-md" />
        <Paragraph className={cs.paragraph} showBook>
          <strong>L’intégration sociale</strong>
          <br />
          Etre intégré socialement dans une communauté, dans un groupe, un village, vous permet
          d’être soutenu, d’avoir de l’aide en cas de difficulté.
        </Paragraph>
        <Img src={img3} mode="avatar-md" />
        <Paragraph className={cs.paragraph} showBook>
          <strong>L’utilité sociale</strong>
          <br />
          Vivre un sentiment d’utilité sociale, c’est avoir un rôle, être et se sentir utile.
        </Paragraph>
      </Grid>
      <Paragraph>
        <strong>
          Les relations sociales ont un impact positif sur la santé.
          <br />
          Le fait de bien vivre avec les autres participe au bien-être personnel et vice versa.
        </strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
