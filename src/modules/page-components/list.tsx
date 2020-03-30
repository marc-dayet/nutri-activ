import React, {FC} from "react"
import cn from "classnames"

import cs from "./list.module.scss"

const PageList: FC<{className?: string}> = ({children, className}) => {
  return <ul className={cn(cs.list, className)}>{children}</ul>
}

export default PageList
