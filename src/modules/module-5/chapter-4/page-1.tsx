import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-1.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°1"
      img={img}
      statment="Les liens sociaux sont aussi importants que l’exercice ou l’équilibre alimentaire."
      isTrue
      answer="VRAI : Les liens sociaux sont importants sur toute la durée de notre vie et tendent à réduire les risques pour la santé dans chaque étape de la vie. Les relations sociales multiples aident les seniors à rester physiquement actifs et participent à leur bien-être émotionnel."
    />
  )
}

export default Page
