import React, {FC, useEffect} from "react"
import {useToggle} from "react-captain"

import Animation from "../../../animation"
import PageContainer from "../../page"
import {Title} from "../../page-components"

const Page: FC = () => {
  const [isReady, setReady] = useToggle(false)

  useEffect(() => {
    import("./page-3-anim.js").then(() => setReady(true))
  })

  if (!isReady) {
    return null
  }

  return (
    <PageContainer>
      <Title>
        Bravo, vous avez terminé le distanciel.
        <br />
        Rendez-vous à présent à la formation présentielle !{" "}
      </Title>
      <Animation name="ANIMATION" composition="8766DDC0BF41F64CB993783BB32571B1" />
    </PageContainer>
  )
}

export default Page
