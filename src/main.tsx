import React, {FC} from "react"

import cs from "./main.module.scss"

type MainProps = {
  theme: {[key: string]: string}
}

const Main: FC<MainProps> = ({theme, children}) => {
  return (
    <div className={theme.main}>
      <main className={cs.main}>{children}</main>
    </div>
  )
}

export default Main
