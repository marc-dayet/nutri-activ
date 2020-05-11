import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-2.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°2"
      img={img}
      statment="Pour maintenir une bonne qualité de vie, il vaut mieux s’appuyer sur les 4 piliers que sont la santé et l’autonomie, la sécurité et le cadre de vie, les relations sociales, les ressources financières."
      isTrue={false}
      answer="FAUX : Les ressources financières font partie du pilier de la sécurité et du cadre de vie. Le pilier manquant est celui des ressources personnelles."
    />
  )
}

export default Page
