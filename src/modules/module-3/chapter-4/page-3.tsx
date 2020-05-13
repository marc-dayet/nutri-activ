import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-3.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°3"
      img={img}
      statment="Dopamine, ocytocine et endorphine sont les hormones sécrétées lors des émotions positives."
      isTrue={false}
      answer="FAUX : La dopamine, l’ocytocine et l’endorphine sont bien des hormones sécrétées lors des émotions positives mais il manque la sérotonine !"
    />
  )
}

export default Page
