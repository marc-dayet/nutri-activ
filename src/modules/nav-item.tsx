import React, {FC} from "react"

type ModuleNavItemProps = {
  className: string
  icon: string
  label: string
}

const ModuleNavItem: FC<ModuleNavItemProps> = props => {
  const {className, icon, label} = props
  return (
    <button className={className}>
      <img src={icon} alt="" />
      <span>{label}</span>
    </button>
  )
}

export default ModuleNavItem
