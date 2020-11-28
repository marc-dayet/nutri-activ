import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph} from "../../page-components"
import {ReactComponent as Logo} from "../../../logo.svg"

import cs from "./page-1.module.scss"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title className={cs.title}>Nous vous souhaitons la bienvenue <br />à la formation pour animer <br />Les ateliers Nutri Activ'</Title>
      <Paragraph align="center">
        <Logo className={cs.logo} />
      </Paragraph>
      <Paragraph bold>
        La première séquence présentera les objectifs et votre parcours de formation. <br />
        Vous approfondirez ensuite vos connaissances en lien avec les modules d’animation
        pour animer Les ateliers Nutri Activ'.
      </Paragraph>
    </PageContainer>
  )
}

export default Page
