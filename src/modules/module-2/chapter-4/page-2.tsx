import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-2.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°2"
      img={img}
      statment="Le stress est un mécanisme naturel."
      isTrue
      answer="VRAI : Le stress est une réponse d’adaptation de notre organisme face aux évènements extérieurs."
    />
  )
}

export default Page
