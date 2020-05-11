import React, {FC} from "react"
import cn from "classnames"

import cs from "./list.module.scss"

type ListProps = {
  className?: string
  padder?: boolean
}
const PageList: FC<ListProps> = ({children, className, padder}) => {
  return <ul className={cn(cs.list, className, {[cs.padder]: padder})}>{children}</ul>
}

export default PageList
