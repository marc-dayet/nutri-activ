import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-2.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°2"
      img={img}
      statment="Vivre bien le grand âge est dû essentiellement à un bon patrimoine génétique."
      isTrue
      answer="VRAI : Vivre bien le grand âge est surtout lié à la façon de percevoir et de mener sa vie : s’accepter comme on est, continuer à apprendre, rester aux commandes… ne relève pas des gènes."
    />
  )
}

export default Page
