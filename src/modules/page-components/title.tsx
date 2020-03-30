import React, {FC} from "react"

import cs from "./title.module.scss"

const PageTitle: FC = ({children}) => {
  return <h1 className={cs.title}>{children}</h1>
}

export default PageTitle
