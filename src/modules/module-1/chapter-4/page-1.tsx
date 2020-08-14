import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-1.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°1"
      img={img}
      statment="Le bien-être et la qualité de vie sont 2 notions subjectives."
      isTrue
      answer="VRAI : La qualité de vie est définie par l’OMS comme la perception qu’a un individu de sa place dans l’existence: qui d’autre que moi est le mieux placé pour estimer ce qui est important pour ma qualité de vie et mon bien-être ?"
    />
  )
}

export default Page
