import React, {FC} from "react"

import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components"
import img from "./page-3-1.png"

const Page: FC = () => {
  return (
    <>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle showBook>La qualité de vie</Subtitle>
      <Grid>
        <Img src={img} mode="round-lg" />
        <div>
          <Paragraph>
            Large champ conceptuel englobant la santé physique de la personne, son état
            psychologique, son niveau d’indépendance, ses relations sociales, ses croyances
            personnelles et sa relation avec son environnement. Etre en bonne santé et vivre
            longtemps ne suffit pas ; encore faut-il vivre « bien ».
          </Paragraph>
          <br />
          <Paragraph>
            Améliorer la qualité de vie est un des bénéfices attendus de la promotion de la santé.
          </Paragraph>
        </div>
      </Grid>
    </>
  )
}

export default Page
