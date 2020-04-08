import React, {FC} from "react"
import cn from "classnames"

import cs from "./paragraph.module.scss"

type PageParagraphProps = {
  className?: string
}

const PageParagraph: FC<PageParagraphProps> = props => {
  const {className, children} = props
  return <div className={cn(cs.paragraph, className)}>{children}</div>
}

export default PageParagraph
