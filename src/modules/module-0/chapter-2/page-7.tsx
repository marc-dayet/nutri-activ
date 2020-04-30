import React, {FC} from "react"

import {Title, Paragraph, Img} from "../../page-components"
import img from "./page-7-1.png"

const Page: FC = () => {
  return (
    <>
      <Title>Les 5 modules de la formation distancielle</Title>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </>
  )
}

export default Page
