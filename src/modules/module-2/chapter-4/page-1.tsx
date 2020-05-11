import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-1.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°1"
      img={img}
      statment="Le stress est néfaste pour l’être humain."
      isTrue={false}
      answer="FAUX : Le stress n’est pas toujours négatif, il permet aussi de survivre, de se dépasser, d’être vigilant, réactif, de nous pousser à réfléchir et à agir autrement… mais il ne faut pas qu’il soit répété ou trop long."
    />
  )
}

export default Page
