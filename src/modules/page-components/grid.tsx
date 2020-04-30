import React, {FC} from "react"
import cn from "classnames"

import cs from "./grid.module.scss"

type GridProps = {
  className?: string
  direction?: "vertical" | "horizontal"
}

const Grid: FC<GridProps> = props => {
  const {className, direction = "horizontal", children} = props

  return (
    <div className={cn(cs.grid, className)} data-direction={direction}>
      {children}
    </div>
  )
}

export default Grid
