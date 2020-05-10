import React, {FC} from "react"
import {useBehaviorSubject} from "react-captain"

import Animation from "../../animation"
import PageContainer from "../page"
import {currStep$} from "../context"

import cs from "./intro.module.scss"

type PageIntroProps = {
  subtitle: string
  animation: string
}

const PageIntro: FC<PageIntroProps> = props => {
  const {subtitle, animation} = props
  const [{module}] = useBehaviorSubject(currStep$)

  return (
    <PageContainer>
      <h1 className={cs.title}>Module {module}</h1>
      <h2 className={cs.subtitle}>{subtitle}</h2>
      <Animation name="ANIMATION" composition={animation} />
    </PageContainer>
  )
}

export default PageIntro
