import React, {FC} from "react"
import cn from "classnames"

import cs from "./grid.module.scss"

type GridProps = {
  className?: string
}

const Grid: FC<GridProps> = props => {
  const {className, children} = props
  return <div className={cn(cs.grid, className)}>{children}</div>
}

export default Grid
