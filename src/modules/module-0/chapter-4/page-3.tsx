import React from "react"
import {useBehaviorSubject} from "react-captain"

import {theme$} from "../../../theme"
import PageConclusion from "../../page-templates/conclusion"
import img from "./page-3.png"

export default () => {
  const [theme] = useBehaviorSubject(theme$)

  return (
    <PageConclusion img={img}>
      Vous avez terminé le module introductif !<br />
      Rendez-vous au module 1 : <strong className={theme.secondary}>Bien-être & Santé</strong>
    </PageConclusion>
  )
}
