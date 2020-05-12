import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components"
import img1 from "./page-4-1.png"
import img2 from "./page-4-2.png"
import img3 from "./page-4-3.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle showBook>Les mécanismes du stress (source de stress : stimuli)</Subtitle>
      <Grid>
        <Img src={img1} mode="avatar-md" />
        <Paragraph>
          <h3>1.Phase d’alerte</h3>
          L’adrénaline augmente le rythme cardiaque et la pression artérielle, accélère la
          respiration, dilate les bronches et les pupilles; elle prépare l’organisme à un effort
          physique, en fournissant l’énergie nécessaire.
        </Paragraph>
        <Img src={img2} mode="avatar-md" />
        <Paragraph>
          <h3>2.Phase de resistance</h3>
          Si le stress dure, la production de cortisol augmente entrainant la libération de glucose
          sanguin vers les muscles. L’organisme fournit l’énergie demandée.
        </Paragraph>
        <Img src={img3} mode="avatar-md" />
        <Paragraph>
          <h3>3.Phase d’épuisement</h3>A long terme, si le niveau d’hormones reste élevé, celui-ci a
          des effets négatifs sur de nombreux organes et sur le système immunitaire, qu’il
          affaiblit.
        </Paragraph>
      </Grid>
    </PageContainer>
  )
}

export default Page
