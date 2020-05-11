import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-3.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°3"
      img={img}
      statment="Le stress peut être responsable du mal de dos."
      isTrue
      answer="VRAI : Il existe une liste importante de maux pouvant être causés ou renforcés par le stress en particulier en cas de stress chronique : insomnies, eczéma, douleurs musculaires…"
    />
  )
}

export default Page
