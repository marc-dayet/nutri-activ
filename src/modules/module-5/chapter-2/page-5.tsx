import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Grid, Img} from "../../page-components"
import img1 from "./page-5-1.png"
import img2 from "./page-5-2.png"
import img3 from "./page-5-3.png"
import img4 from "./page-5-4.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Paragraph padder>Pour développer des relations positives, il est nécessaire de :</Paragraph>
      <Grid padder>
        <Img src={img1} mode="avatar-lg" />
        <br />
        <Img src={img2} mode="avatar-lg" />
        <br />
        <Img src={img3} mode="avatar-lg" />
        <br />
        <Img src={img4} mode="avatar-lg" />
        <br />
      </Grid>
      <Paragraph>
        <strong>
          Etre ouvert et créatif permet de développer des relations sociales positives.
        </strong>
      </Paragraph>
    </PageContainer>
  )
}

export default Page
