import React, {FC} from "react"
import cn from "classnames"

import {ReactComponent as ButtonBackground1} from "./chapter-button-1.svg"
import {ReactComponent as ButtonBackground2} from "./chapter-button-2.svg"
import {ReactComponent as ButtonBackground3} from "./chapter-button-3.svg"
import {ReactComponent as ButtonBackground4} from "./chapter-button-4.svg"
import {ReactComponent as ButtonBackground5} from "./chapter-button-5.svg"

import cs from "./chapter-button.module.scss"

const backgrounds = [
  ButtonBackground1,
  ButtonBackground2,
  ButtonBackground3,
  ButtonBackground4,
  ButtonBackground5,
]

export type ChapterButtonProps = {
  isActive: boolean
  onClick: Function
  children: number
  disabled: boolean
  title: string
}

const ChapterButton: FC<ChapterButtonProps> = props => {
  const {onClick: handleClick, isActive, disabled, title, children} = props
  const ButtonBackground = backgrounds[(children - 1) % 5]

  return (
    <button
      className={cn(cs.button, {[cs.active]: isActive})}
      onClick={() => handleClick()}
      disabled={!isActive && disabled}
      title={title}
    >
      <span className={cs.label}>{children}</span>
      <ButtonBackground className={cs.background} />
    </button>
  )
}

export default ChapterButton
