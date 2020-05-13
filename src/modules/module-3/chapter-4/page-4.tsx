import React, {FC} from "react"

import PageContainer from "../../page"
import img from "./page-4.png"

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°4"
      img={img}
      statment="Le seul but des arnaques autour du bien-être est de vous  soutirer de l’argent."
      isTrue={false}
      answer="FAUX : De nombreux témoignages du bienfait de techniques diverses sur la santé circulent sur internet. Les promoteurs peuvent être sincères, et ne pas vouloir essayer de vendre leur méthode. Cependant, elles ne sont pas forcément sans danger."
    />
  )
}

export default Page
