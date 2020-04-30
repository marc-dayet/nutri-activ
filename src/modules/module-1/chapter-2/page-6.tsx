import React, {FC} from "react"

import {Title, List, ListItem} from "../../page-components"
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
          Pour améliorer ou renforcer sa qualité de vie, il est préférable d’investir les 4 piliers.
          Souvent, les personnes n’investissent pas ou peu les ressources personnelles qui sont
          importantes.
        </ListItem>
        <ListItem className={cs.listItem}>
          Interroger les fondements de sa qualité de vie permet de réfléchir à la place accordée aux
          ressources personnelles : estime de soi, épanouissement, créativité, plaisir, liberté,
          loisirs…
        </ListItem>
      </List>
    </>
  )
}

export default Page
