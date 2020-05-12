import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph, List, ListItem} from "../../page-components"
import book from "../../page-components/subtitle-book.png"

import cs from "./page-10.module.scss"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle>De nombreuses activités peuvent permettre de favoriser notre bien-être :</Subtitle>
      <List className={cs.list}>
        <ListItem className={cs.listItem}>
          Repérer ses moments de bien-être pour en profiter, les faire durer et les reproduire.
        </ListItem>

        <ListItem className={cs.listItem}>
          S’engager dans des activités inhabituelles pour se créer de nouvelles opportunités de se
          sentir bien en s’approchant des ressources locales.
        </ListItem>

        <ListItem className={cs.listItem}>
          Faire des compliments, dire et entendre des choses agréables procurent à chacun de
          nombreuses satisfactions.
        </ListItem>

        <ListItem className={cs.listItem}>
          Aider son corps à se détendre en pratiquant des exercices physiques adaptés.
        </ListItem>

        <ListItem className={cs.listItem}>
          Prendre le temps de se reposer, se relaxer, se déconnecter.
          <img className={cs.book} src={book} alt="" />
        </ListItem>
      </List>
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
