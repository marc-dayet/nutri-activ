import React, {FC} from "react"

import {Goal} from "../../page-templates"
import intersessionWork from "./page-4.png"

const Page: FC = () => {
  return (
    <Goal
      goals={["Identifier ses moments de bien-être et savoir les reproduire"]}
      content={[
        "Retour d’expérience (travaux sur les moments de bien-être)",
        "Pourquoi et comment développer les émotions positives ?",
        "Quelques précautions à prendre",
        "Points d’étape 3",
        "Préparation de l’étape 4 en lien avec le travail collectif intersession",
        "Collation (à adapter)",
      ]}
      intersessionWork={intersessionWork}
    />
  )
}

export default Page
