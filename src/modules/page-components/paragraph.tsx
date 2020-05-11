import React, {FC} from "react"
import cn from "classnames"

import cs from "./paragraph.module.scss"

type PageParagraphProps = {
  className?: string
  align?: "left" | "center" | "right"
  padder?: boolean
}

const PageParagraph: FC<PageParagraphProps> = props => {
  const {className, padder, align = "center", children} = props

  return (
    <div className={cn(cs.paragraph, cs[align], className, {[cs.padder]: padder})}>{children}</div>
  )
}

export default PageParagraph
