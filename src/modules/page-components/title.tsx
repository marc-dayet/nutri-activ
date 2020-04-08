import React, {FC} from "react"
import cn from "classnames"

import cs from "./title.module.scss"

type PageTitleProps = {
  className?: string
}

const PageTitle: FC<PageTitleProps> = props => {
  const {className, children} = props
  return <h1 className={cn(cs.title, className)}>{children}</h1>
}

export default PageTitle
