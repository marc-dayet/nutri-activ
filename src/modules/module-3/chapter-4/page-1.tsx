import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-1.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°1"
      img={img}
      statment="On peut stimuler soi-même les hormones du bien-être."
      isTrue
      answer="VRAI : On peut stimuler soi-même les hormones du bien-être grâce à des astuces ou activités simples comme quelques minutes de marche, un câlin, une soirée entre amis, écouter une de ses chansons préférées…"
    />
  )
}

export default Page
