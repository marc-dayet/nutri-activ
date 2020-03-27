import React, {Suspense, FC} from "react"

import logo from "./logo.svg"
import Account from "../auth/account"

import cs from "./nav.module.scss"

const req = require.context("../modules", true, /module-\d+\/nav-item.tsx$/)
const modules = req
  .keys()
  .map<{default: FC}>(req)
  .map(module => React.lazy(() => Promise.resolve(module)))

const Nav: FC = () => {
  return (
    <Suspense fallback={null}>
      <div className={cs.nav}>
        <img className={cs.logo} src={logo} alt="" />
        <nav className={cs.modules}>
          {modules.map((NavItem, idx) => (
            <NavItem key={idx} />
          ))}
        </nav>
        <Account />
      </div>
    </Suspense>
  )
}

export default Nav
