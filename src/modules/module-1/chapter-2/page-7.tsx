import React, {FC} from "react"

import {Title, List, ListItem, Paragraph} from "../../page-components"
import img from "./page-6.png"

import cs from "./page-6.module.scss"

const Page: FC = () => {
  return (
    <>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <div className={cs.imgContainer}>
        <img className={cs.img} src={img} alt="" />
      </div>
      <List>
        <ListItem className={cs.listItem}>
          Identifier ses forces et ses fragilités permet de se fixer des objectifs d’amélioration
        </ListItem>
        <ListItem className={cs.listItem}>
          Penser sa qualité de vie permet à chacun d’envisager les moyens d’actions pour l’améliorer
        </ListItem>
      </List>
      <Paragraph className={cs.paragraph}>
        Lors de la formation présentielle, vous apprendrez à interroger les participants sur leur
        qualité de vie à l’aide d’un outil spécifique, le baromètre de la qualité de vie.
      </Paragraph>
    </>
  )
}

export default Page
