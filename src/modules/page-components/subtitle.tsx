import React, {FC} from "react"
import {useBehaviorSubject} from "react-captain"
import cn from "classnames"

import {theme$} from "../../theme"
import cs from "./subtitle.module.scss"
import book from "./subtitle-book.png"

type SubtitleProps = {
  className?: string
  showBook?: boolean
}

const Subtitle: FC<SubtitleProps> = ({className, showBook = false, children}) => {
  const [theme] = useBehaviorSubject(theme$)

  return (
    <h2 className={cn(cs.subtitleContainer, theme.secondary, className)}>
      <span className={cs.subtitle}>
        {children}
        {showBook && <img className={cs.book} src={book} alt="" />}
      </span>
    </h2>
  )
}

export default Subtitle
