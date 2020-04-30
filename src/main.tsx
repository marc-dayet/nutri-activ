import React, {FC} from "react"
import {useBehaviorSubject} from "react-captain"
import cn from "classnames"

import {theme$} from "./theme"

import cs from "./main.module.scss"

const Main: FC = ({children}) => {
  const [theme] = useBehaviorSubject(theme$)
  return <main className={cn(cs.main, theme.main)}>{children}</main>
}

export default Main
