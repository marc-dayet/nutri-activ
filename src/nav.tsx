import React, {FC} from "react"

import logo from "./logo.svg"
import Module0 from "./modules/0/nav-item"
import Module1 from "./modules/1/nav-item"
import Module2 from "./modules/2/nav-item"
import Module3 from "./modules/3/nav-item"
import Module4 from "./modules/4/nav-item"
import Account from "./auth/account"

import cs from "./nav.module.scss"

type NavProps = {}

const Nav: FC<NavProps> = () => {
  return (
    <div className={cs.nav}>
      <img className={cs.logo} src={logo} alt="" />
      <nav className={cs.modules}>
        <Module0 />
        <Module1 />
        <Module2 />
        <Module3 />
        <Module4 />
      </nav>
      <Account />
    </div>
  )
}

export default Nav
