import React, {FC} from "react"

import {Preface} from "../../page-templates"
import img1 from "./page-2-1.png"
import img2 from "./page-2-2.png"
import img3 from "./page-2-3.png"

const Page: FC = () => {
  return (
    <Preface img1={img1} img2={img2} img3={img3}>
      Bienvenue dans le troisième module du distanciel en lien avec la troisième étape du parcours
      Cap Bien-être : Bien vivre avec Soi
    </Preface>
  )
}

export default Page
