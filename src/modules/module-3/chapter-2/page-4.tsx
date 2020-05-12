import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, List, ListItem, Img} from "../../page-components"
import img from "./page-4.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder align="left">
        Les émotions positives :
      </Paragraph>
      <List padder>
        <ListItem>annulent les effets des émotions négatives.</ListItem>
        <ListItem>
          élargissent la façon de regarder les choses, diversifient les idées et les activités.
        </ListItem>
        <ListItem>facilitent le changement de comportement</ListItem>
      </List>
      <Paragraph>
        <strong>
          Indispensables à notre bien-être et à notre survie, les émotions positives nous rendent
          plus ouverts au possible et aux autres.
        </strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
