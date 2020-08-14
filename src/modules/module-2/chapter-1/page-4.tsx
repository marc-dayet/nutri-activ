import React, {FC} from "react"

import {Goal} from "../../page-templates"
import intersessionWork from "./page-4.png"

const Page: FC = () => {
  return (
    <Goal
      goals={["Identifier, comprendre et gérer le stress "]}
      content={[
        "Retour d’expérience (travaux sur les situations stressantes)",
        "Les sources de stress",
        "Emotions associées au stress",
        "Effets du stress sur la santé",
        "Faire face aux situations stressantes",
        "Retour au calme",
        "Point d’étape 2",
        "Préparation de l’étape 3 en lien avec le travail intersession",
        "Collation (à adapter)",
      ]}
      intersessionWork={intersessionWork}
    />
  )
}

export default Page
