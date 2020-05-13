import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-3.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°3"
      img={img}
      statment="Les activités collectives qui procurent le plus d’émotions positives, comme les voyages en groupe, sont généralement payantes."
      isTrue={false}
      answer="FAUX : Il n’existe pas de classement des activités collectives qui procurent le plus de bien-être. C’est de l’ordre du ressenti de chacun. Un grand nombre d’activités ne nécessitent pas d’investissement financier: profiter d’une soirée entre amis, intégrer le comité des fêtes du village, jouer aux jeux de société…"
    />
  )
}

export default Page
