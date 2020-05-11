import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph, List, ListItem} from "../../page-components"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle showBook>Les effets du stress sur la santé</Subtitle>
      <Paragraph align="left" padder>
        Le stress aigu entraîne des manifestations physiques mais n’agit pas sur le long terme sur
        la santé contrairement au stress chronique.
      </Paragraph>
      <Paragraph align="left">
        Le stress chronique peut générer des répercussions organiques et psychiques.
      </Paragraph>
      <List padder>
        <ListItem>Il favorise l’insomnie et les troubles du sommeil.</ListItem>
        <ListItem>Il renforce l’anxiété, les phobies et la dépression.</ListItem>
        <ListItem>
          Il peut atteindre le système cardio-vasculaire (hypertension artérielle, infarctus...)
        </ListItem>
        <ListItem>
          Il peut atteindre le système digestif, provoquer de nombreux troubles gastro-intestinaux.
        </ListItem>
        <ListItem>Il affaiblit l’immunité et nous rend plus fragiles face aux infections…</ListItem>
      </List>
      <Paragraph align="left">
        <strong>
          Le stress chronique peut générer des répercussions organiques et psychiques.
        </strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
