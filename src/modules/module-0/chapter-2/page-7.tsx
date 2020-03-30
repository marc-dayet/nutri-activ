import React, {FC} from "react"

import {Title, Paragraph} from "../../page-components"
import image1 from "./page-7-1.png"

import cs from "./page-7.module.scss"

const Page: FC = () => {
  return (
    <>
      <Title>Les 5 modules de la formation distancielle</Title>
      <Paragraph>
        <img className={cs.image} src={image1} alt="" />
      </Paragraph>
    </>
  )
}

export default Page
