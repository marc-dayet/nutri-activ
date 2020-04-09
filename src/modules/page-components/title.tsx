import React, {FC} from "react"
import cn from "classnames"

import cs from "./title.module.scss"

type TitleProps = {
  className?: string
}

const Title: FC<TitleProps> = props => {
  const {className, children} = props
  return <h1 className={cn(cs.title, className)}>{children}</h1>
}

export default Title
