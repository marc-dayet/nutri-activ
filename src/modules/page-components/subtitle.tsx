import React, {FC} from "react"
import cn from "classnames"

import cs from "./subtitle.module.scss"

const PageSubtitle: FC<{className?: string}> = ({className, children}) => {
  return <h2 className={cn(cs.subtitle, className)}>{children}</h2>
}

export default PageSubtitle
