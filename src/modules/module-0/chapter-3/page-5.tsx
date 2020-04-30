import React, {FC} from "react"

import {Title, Paragraph, Img} from "../../page-components"
import img from "./page-5-1.png"

const Page: FC = () => {
  return (
    <>
      <Title>Les contenus clés travaillés durant le parcours Cap Bien-être</Title>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </>
  )
}

export default Page
