import React, {FC} from "react"
import cn from "classnames"

import cs from "./grid.module.scss"

type GridProps = {
  className?: string
  direction?: "vertical" | "horizontal"
  padder?: boolean
}

const Grid: FC<GridProps> = props => {
  const {className, direction = "horizontal", padder, children} = props

  return (
    <div className={cn(cs.grid, className, {[cs.padder]: padder})} data-direction={direction}>
      {children}
    </div>
  )
}

export default Grid
