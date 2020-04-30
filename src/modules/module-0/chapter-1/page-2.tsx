import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Grid, Img} from "../../page-components"
import img1 from "./page-2-1.png"
import img2 from "./page-2-2.png"
import img3 from "./page-2-3.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Le module introductif Cap bien-être :</Title>
      <Grid>
        <Img mode="avatar-lg" src={img1} />
        <Paragraph>Présentation de la formation distancielle</Paragraph>
        <Img mode="avatar-lg" src={img2} />
        <Paragraph>
          Les fondements et les contenus clés sur lesquels repose le parcours Cap Bien-être.
        </Paragraph>
        <Img mode="avatar-lg" src={img3} />
        <Paragraph>
          De la formation distancielle à la formation présentielle : vos questions aux formateurs.
        </Paragraph>
      </Grid>
    </PageContainer>
  )
}

export default Page
