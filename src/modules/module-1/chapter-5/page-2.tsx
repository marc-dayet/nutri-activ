import React from "react"
import {useBehaviorSubject} from "react-captain"

import {theme$} from "../../../theme"
import PageConclusion from "../../page-templates/conclusion"
import img from "./page-2.png"

export default () => {
  const [theme] = useBehaviorSubject(theme$)

  return (
    <PageConclusion img={img}>
      Vous avez terminé le module 1 !<br />
      Rendez-vous au module 2 : <strong className={theme.secondary}>Gestion du Stress</strong>
    </PageConclusion>
  )
}
