import React, {FC} from "react"
import {useBehaviorSubject} from "react-captain"

import {auth$} from "./context"
import Login from "./login"

const AuthGuard: FC = ({children}) => {
  const [auth] = useBehaviorSubject(auth$)

  if (auth.type === "not-initialized") {
    return <div>loading</div>
  }

  if (auth.type === "not-authenticated") {
    return <Login />
  }

  return <>{children}</>
}

export default AuthGuard
