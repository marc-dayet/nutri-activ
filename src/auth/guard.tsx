import React, {FC} from "react";
import {useObservable} from "@soywod/react-use-observable";

import {auth$} from "./context";
import Login from "./login";

const AuthGuard: FC = ({children}) => {
  const [auth] = useObservable(auth$, auth$.value);

  if (auth.type === "not-initialized") {
    return <div>loading</div>;
  }

  if (auth.type === "not-authenticated") {
    return <Login />;
  }

  return <>{children}</>;
};

export default AuthGuard;
