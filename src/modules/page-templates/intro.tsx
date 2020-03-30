import React, {FC} from "react"

import cs from "./intro.module.scss"

type PageIntroProps = {
  title: string
  subtitle: string
}

const PageIntro: FC<PageIntroProps> = props => {
  const {title, subtitle} = props

  return (
    <>
      <h1 className={cs.title}>{title}</h1>
      <h2 className={cs.subtitle}>{subtitle}</h2>
    </>
  )
}

export default PageIntro
