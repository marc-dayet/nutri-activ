import React, {FC} from "react"

import cs from "./main.module.scss"

type MainProps = {}

const Main: FC<MainProps> = ({children}) => {
  return <main className={cs.main}>{children}</main>
}

export default Main
