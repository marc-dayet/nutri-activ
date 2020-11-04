import React, {FC} from "react";
import {useObservable} from "@soywod/react-use-observable";
import cn from "classnames";

import {theme$} from "./theme";

import cs from "./main.module.scss";

const Main: FC = ({children}) => {
  const [theme] = useObservable(theme$, theme$.value);
  return <main className={cn(cs.main, theme.main)}>{children}</main>;
};

export default Main;
