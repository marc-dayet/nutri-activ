import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-3.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°3"
      img={img}
      statment="Les émotions sont toujours agréables ou désagréables."
      isTrue={false}
      answer="FAUX : Certaines émotions sont ambigües et peuvent être les deux à la fois. Recevoir un compliment peut vous rendre fier mais vous pouvez ressentir une certaine gêne également."
    />
  )
}

export default Page
