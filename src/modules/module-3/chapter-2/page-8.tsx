import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Img} from "../../page-components"
import book from "../../page-components/subtitle-book.png"
import img from "./page-8.png"

import cs from "./page-8.module.scss"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph>
        Avoir une approche positive, cultiver son optimisme, relativiser, <br />
        Vivre et partager des expériences positives, <br />
        Continuer à avoir des projets, rester actif, curieux
        <br />
      </Paragraph>
      <Paragraph>
        <strong>
          sont des facteurs de protection qui favorisent le bien-vieillir.
          <img className={cs.book} src={book} alt="" />
        </strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
