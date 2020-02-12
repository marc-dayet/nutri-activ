import React, {FC} from "react"

import iconName from "./name.icon.svg"
import iconLogout from "./logout.icon.svg"

import cs from "./account.module.scss"

type AccountProps = {}

const Account: FC<AccountProps> = () => {
  return (
    <div className={cs.container}>
      <div>MA SESSION</div>
      <div>
        <img className={cs.icon} src={iconName} alt="" />
      </div>
      <div>
        <img className={cs.icon} src={iconLogout} alt="" />
      </div>
    </div>
  )
}

export default Account
