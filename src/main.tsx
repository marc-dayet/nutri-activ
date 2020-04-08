import React, {FC} from "react"
import {useBehaviorSubject} from "react-captain"
import cn from "classnames"

import {theme$} from "./theme"

import cs from "./main.module.scss"

const Main: FC = ({children}) => {
  const [theme] = useBehaviorSubject(theme$)

  return (
    <div className={cn(cs.main, theme.main)}>
      <main>{children}</main>
    </div>
  )
}

export default Main
