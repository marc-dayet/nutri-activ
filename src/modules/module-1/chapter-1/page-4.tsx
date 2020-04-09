import React, {FC} from "react"

import {Goal} from "../../page-templates"
import intersessionWork from "./page-4.png"

const Page: FC = () => {
  return (
    <Goal
      goals={[
        "Comprendre les liens entre qualité de vie, bien-être, émotions et santé",
        "Prendre conscience de l’importance des ressources personnelles",
      ]}
      content={[
        "Se présenter",
        "Présenter la randonnée",
        "Les piliers de la qualité de vie",
        "Les émotions",
        "Les liens entre émotions et santé",
        "Point d’étape 1",
        "Préparation de l’étape 2 en lien avec le travail intersession",
        "Collation (à adapter)",
      ]}
      intersessionWork={intersessionWork}
    />
  )
}

export default Page
