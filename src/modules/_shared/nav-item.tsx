import React, {FC} from "react"
import cn from "classnames"

import cs from "./nav-item.module.scss"

export type NavItemProps = {
  theme: string
  icon: string
  label: string
}

const NavItem: FC<NavItemProps> = props => {
  const {theme, icon, label} = props

  return (
    <button className={cn(cs.navItem, theme)}>
      <img src={icon} alt="" />
      <span>{label}</span>
    </button>
  )
}

export default NavItem
