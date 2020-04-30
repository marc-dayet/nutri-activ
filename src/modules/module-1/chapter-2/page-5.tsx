import React, {FC} from "react"

import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components"
import img from "./page-5.png"

const Page: FC = () => {
  return (
    <>
      <Title>2. Ce que doit savoir l’animateur pour préparer le voyage</Title>
      <Subtitle showBook>Les ressources personnelles</Subtitle>
      <Grid>
        <Img src={img} mode="avatar" />
        <div>
          <Paragraph>
            Elles englobent les compétences, les talents, la personnalité… Les ressources
            personnelles désignent la faculté de réfléchir à ses émotions, ses cognitions et son
            identité individuelle.
            <br />
            Développer ses ressources personnelles permet de mieux gérer les situations difficiles
            au quotidien, de mieux gérer les changements, d’oser de nouvelles expériences, de mieux
            gérer son stress…
          </Paragraph>
          <br />
          <Paragraph>
            Les ressources personnelles sont un atout précieux pour mieux gérer son bien-être.
          </Paragraph>
        </div>
      </Grid>
    </>
  )
}

export default Page
