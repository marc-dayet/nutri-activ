import React, {Suspense, FC} from "react"
import {useBehaviorSubject} from "react-captain"
import cn from "classnames"

import logo from "./logo.svg"
import Account from "./auth/account"
import {lastStep$} from "./modules/context"

import cs from "./nav.module.scss"

const req = require.context("./modules", true, /module-\d+\/nav-item.ts$/)
const modules = req
  .keys()
  .map<{default: {theme: string; icon: string; label: string}}>(req)
  .map(module => module.default)

type NavProps = {
  activeModule: number
  changeModule: (module: number) => void
}

const Nav: FC<NavProps> = props => {
  const {activeModule, changeModule} = props
  const [lastStep] = useBehaviorSubject(lastStep$)

  return (
    <Suspense fallback={null}>
      <div className={cs.nav}>
        <img className={cs.logo} src={logo} alt="" />
        <nav className={cs.modules}>
          {modules.map(({theme, icon, label}, module) => (
            <button
              key={module}
              className={cn(cs.module, theme, {[cs.active]: module === activeModule})}
              onClick={() => changeModule(module)}
              disabled={lastStep.module < module}
            >
              <img src={icon} alt="" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
        <Account />
      </div>
    </Suspense>
  )
}

export default Nav
