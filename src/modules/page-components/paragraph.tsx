import React, {FC} from "react"
import cn from "classnames"

import cs from "./paragraph.module.scss"

const PageParagraph: FC<{className?: string}> = ({children, className}) => {
  return <div className={cn(cs.paragraph, className)}>{children}</div>
}

export default PageParagraph
