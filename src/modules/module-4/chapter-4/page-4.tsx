import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-4.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°4"
      img={img}
      statment="Etre intégré socialement, c’est avoir trouvé sa place dans son environnement familial."
      isTrue
      answer="VRAI : Etre intégré socialement, c’est aller plus loin que les relations familiales avec son conjoint, ses enfants, ses petits-enfants. C’est aller vers des actions collectives de proximité (clubs, loisirs), des groupes d’entraide, des lieux de participation sociale et citoyenne…"
    />
  )
}

export default Page
