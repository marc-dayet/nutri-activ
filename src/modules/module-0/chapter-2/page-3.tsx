import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph} from "../../page-components"
import img1 from "./page-3-1.png"
import img2 from "./page-3-3.png"

import cs from "./page-3.module.scss"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Comment est construit le distanciel de formation ?</Title>
      <div className={cs.grid}>
        <img className={cs.img1} src={img1} alt="" />
        <Paragraph>Dans la formation distancielle, chaque séquence est intitulée Module.</Paragraph>
        <img className={cs.img2} src={img2} alt="" />
        <Paragraph>
          Dans les modules du distanciel, certaines notions ou concepts comportent une icône
          «livret» : ce visuel illustré ci-dessus indique que les notions sont développées dans les
          livrets ressources.
        </Paragraph>
      </div>
    </PageContainer>
  )
}

export default Page
