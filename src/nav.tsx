import React, {FC} from "react"

/* import {ReactComponent as IconModule0} from "./modules/module-0.icon.svg" */
/* import {ReactComponent as IconModule0} from "./modules/module-1.icon.svg" */
/* import {ReactComponent as IconModule0} from "./modules/module-2.icon.svg" */
/* import {ReactComponent as IconModule0} from "./modules/module-3.icon.svg" */
/* import {ReactComponent as IconModule0} from "./modules/module-4.icon.svg" */

import cs from "./nav.module.scss"

type NavProps = {}

const Nav: FC<NavProps> = props => {
  return (
    <div className={cs.nav}>
      <img className={cs.logo} src="#" alt="" />
      <nav className={cs.modules}>
        <button>module 0</button>
        <button>module 1</button>
        <button>module 2</button>
        <button>module 3</button>
        <button>module 4</button>
      </nav>
      <div className={cs.account} />
    </div>
  )
}

export default Nav
