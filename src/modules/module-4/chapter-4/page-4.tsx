import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-4.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°4"
      img={img}
      statment="Les émotions agréables peuvent se développer et les émotions désagréables peuvent se réguler."
      isTrue
      answer="VRAI : Au fil d'un travail personnel, on peut développer ses émotions positives et apprendre à mieux gérer les émotions désagréables. Nous verrons dans les prochaines étapes les techniques les plus efficaces."
    />
  )
}

export default Page
