import React, {FC} from "react"

import {Goal} from "../../page-templates"
import intersessionWork from "./page-4.png"

const Page: FC = () => {
  return (
    <Goal
      goals={[
        "Comprendre l’importance de la vie sociale pour la santé et prendre des résolutions pour gérer le stress et les émotions",
      ]}
      content={[
        "Retour d’expérience (activité de groupe préparée)",
        "Pourquoi et comment bien vivre avec les autres ?",
        "Points d’étape 4",
        "Les essentiels de Cap bien-être",
        "Vos engagements pour mieux gérer le stress et les émotions",
        "Evaluation : piliers de la qualité de vie",
        "Préparation de l’étape 5 (planification des entretiens téléphoniques)",
        "Collation (à adapter) ",
      ]}
      intersessionWork={intersessionWork}
    />
  )
}

export default Page
