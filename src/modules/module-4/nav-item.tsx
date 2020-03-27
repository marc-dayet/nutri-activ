import React from "react"

import NavItem from "../_shared/nav-item"
import icon from "./nav-item.svg"

import cs from "./theme.module.scss"

export default () => <NavItem theme={cs.navItem} icon={icon} label="Vie avec les autres" />
