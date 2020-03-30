import React, {FC} from "react"
import cn from "classnames"

import cs from "./list-item.module.scss"

const PageListItem: FC<{className?: string}> = ({children, className}) => {
  return <li className={cn(cs.listItem, className)}>{children}</li>
}

export default PageListItem
