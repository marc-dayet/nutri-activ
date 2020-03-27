import React, {FC} from "react"

import cs from "./main.module.scss"

type MainProps = {
  theme: string
}

const Main: FC<MainProps> = ({theme, children}) => {
  return (
    <div className={theme}>
      <main className={cs.main}>{children}</main>
    </div>
  )
}

export default Main
