import React from "react"
import {useBehaviorSubject} from "react-captain"

import {theme$} from "../../../theme"
import PageConclusion from "../../page-templates/conclusion"
import img from "./page-2.png"

export default () => {
  const [theme] = useBehaviorSubject(theme$)

  return (
    <PageConclusion img={img}>
      Vous avez terminé le module 2 !<br />
      Rendez-vous au module 3 : <strong className={theme.secondary}>Vivre avec Soi</strong>
    </PageConclusion>
  )
}
