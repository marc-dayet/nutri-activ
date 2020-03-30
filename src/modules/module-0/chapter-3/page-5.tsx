import React, {FC} from "react"

import {Title, Paragraph} from "../../page-components"
import image1 from "./page-5-1.png"

import cs from "./page-5.module.scss"

const Page: FC = () => {
  return (
    <>
      <Title>Les contenus clés travaillés durant le parcours Cap Bien-être</Title>
      <Paragraph>
        <img className={cs.image} src={image1} alt="" />
      </Paragraph>
    </>
  )
}

export default Page
