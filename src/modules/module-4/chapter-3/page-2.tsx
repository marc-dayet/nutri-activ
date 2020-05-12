import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, List, ListItem} from "../../page-components"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title> 3. Ce que doit transmettre l’animateur au groupe durant l’étape </Title>
      <Subtitle>Pour maintenir le cap vers le bien-être</Subtitle>
      <List padder>
        <ListItem>Développer ses ressources personnelles, c’est améliorer sa santé.</ListItem>
        <ListItem>On peut apprendre à gérer ses émotions</ListItem>
      </List>
      <List padder>
        <ListItem>On peut apprendre à repérer, accepter, comprendre, prévenir le stress.</ListItem>
        <ListItem>
          L’analyse et l’anticipation, le retour au calme et la recherche de soutien sont des
          techniques efficaces contre le stress, à la portée de chacun
        </ListItem>
      </List>
      <List padder>
        <ListItem>
          On peut travailler sa santé émotionnelle comme on travaille sa souplesse ou sa
          musculature.
        </ListItem>
        <ListItem>
          Chacun peut trouver sa propre façon de cultiver ses moments de bien-être.
        </ListItem>
      </List>
      <List padder>
        <ListItem>
          Bien vivre avec les autres contribue à notre bien-être, il est important de pratiquer une
          activité collective.
        </ListItem>
        <ListItem>Etre intégré socialement, c’est aussi être soutenu en cas de coup dur.</ListItem>
      </List>
    </PageContainer>
  )
}

export default Page
