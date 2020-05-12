import React, {FC} from "react"

import PageContainer from "../page"
import {Title, Paragraph} from "../page-components"

import cs from "./preface.module.scss"

type PrefacePageProps = {
  children: string
  img1: string
  img2: string
  img3: string
}

const PrefacePage: FC<PrefacePageProps> = props => {
  const {img1, img2, img3, children} = props

  return (
    <PageContainer>
      <Title className={cs.title}>Quelques conseils pour bien démarrer le module</Title>
      <Paragraph className={cs.paragraph}>{children}</Paragraph>
      <div className={cs.grid}>
        <img className={cs.img} src={img1} alt="" />
        <Paragraph className={cs.paragraph}>
          Avant de commencer, assurez-vous d’avoir avec vous le livret ressources à consulter
          régulièrement en complément du distanciel.
        </Paragraph>
        <img className={cs.img} src={img2} alt="" />
        <Paragraph className={cs.paragraph}>
          Installez-vous au calme, dans un endroit où vous serez tranquille, loin de la télévision
          et de votre téléphone portable.
        </Paragraph>
        <img className={cs.img} src={img3} alt="" />
        <Paragraph className={cs.paragraph}>
          Pensez à noter au fur et à mesure toutes vos questions pour les reporter ensuite dans le
          questionnaire de fin de module. Les réponses à vos questionnements seront apportées au
          début de la formation présentielle.
        </Paragraph>
      </div>
      <Paragraph className={cs.paragraph}>Voilà, vous êtes prêt(e), bonne formation !</Paragraph>
    </PageContainer>
  )
}

export default PrefacePage
