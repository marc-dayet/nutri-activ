import React, {FC} from "react"
import cn from "classnames"

import book from "./subtitle-book.png"

import cs from "./paragraph.module.scss"

type PageParagraphProps = {
  className?: string
  align?: "left" | "center" | "right"
  padder?: boolean
  showBook?: boolean
}

const PageParagraph: FC<PageParagraphProps> = props => {
  const {className, padder, align = "center", showBook, children} = props

  return (
    <div className={cn(cs.paragraph, cs[align], className, {[cs.padder]: padder})}>
      {children}
      {showBook && <img className={cs.book} src={book} alt="" />}
    </div>
  )
}

export default PageParagraph
