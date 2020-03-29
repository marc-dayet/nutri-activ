import React, {FC} from "react"

import {ReactComponent as ButtonBackground} from "./page-button.svg"

import cs from "./page-button.module.scss"

export type PageProps = {
  onClick: Function
}

const PageContainer: FC<PageProps> = ({onClick: handleClick, children}) => {
  return (
    <button className={cs.button} onClick={() => handleClick()}>
      <span className={cs.label}>{children}</span>
      <ButtonBackground className={cs.background} />
    </button>
  )
}

export default PageContainer
