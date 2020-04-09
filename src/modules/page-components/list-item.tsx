import React, {FC} from "react"
import cn from "classnames"

import {ReactComponent as Icon} from "./list-item.svg"
import cs from "./list.module.scss"

const PageListItem: FC<{className?: string}> = ({children, className}) => {
  return (
    <li className={cn(cs.listItem, className)}>
      <Icon className={cs.icon} />
      {children}
    </li>
  )
}

export default PageListItem
