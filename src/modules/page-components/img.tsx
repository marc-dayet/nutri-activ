import React, {FC} from "react"

import cs from "./img.module.scss"

type ImgProps = {
  src: string
  mode: "avatar" | "fullscreen"
  title?: string
}

const Img: FC<ImgProps> = props => {
  const {src, mode, title} = props
  return <img className={cs.img} src={src} alt="" title={title} data-mode={mode} />
}

export default Img
