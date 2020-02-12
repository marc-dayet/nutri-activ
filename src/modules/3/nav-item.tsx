import React from "react"

import NavItem from "../nav-item"
import icon from "./nav-item.icon.svg"

import cs from "./nav-item.module.scss"

const ModuleNavItem = () => <NavItem className={cs.container} icon={icon} label="Vivre avec Soi" />

export default ModuleNavItem