import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-4.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°4"
      img={img}
      statment="En cas de stress, Il faut éviter les réactions centrées sur les émotions, l’évitement."
      isTrue={false}
      answer="FAUX : Se centrer sur les émotions et l’évitement ne permettent pas de régler la situation mais peut être utile provisoirement quand il n’y a pas de solution."
    />
  )
}

export default Page
