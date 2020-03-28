import React, {FC} from "react"

import {ReactComponent as Logo} from "../../../logo.svg"

import cs from "./page-1.module.scss"

const Page: FC = () => {
  return (
    <>
      <h1 className={cs.title}>Bonjour et bienvenue !</h1>
      <p className={cs.paragraph}>
        Nous sommes heureux de vous accueillir parmi les animateurs souhaitant animer et participer
        au développement de l’action sur le territoire
      </p>
      <div className={cs.logoContainer}>
        <Logo className={cs.logo} />
      </div>
      <p className={cs.paragraph}>
        Pour tout complément d’information, n’hésitez pas à contacter le coordonnateur de l’action
        pour votre territoire d’intervention.
      </p>
    </>
  )
}

export default Page
