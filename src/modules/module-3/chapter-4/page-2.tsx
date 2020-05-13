import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-2.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°2"
      img={img}
      statment="Vivre des émotions positives peut permettre d’annuler les effets des émotions désagréables."
      isTrue
      answer="VRAI : Cependant ce n’est pas la seule raison pour laquelle il est nécessaire de vivre des émotions positives. Elles permettent aussi d’enrichir nos ressources propres (connaissances, compétences, santé) et d’obtenir une meilleure satisfaction de la vie."
    />
  )
}

export default Page
