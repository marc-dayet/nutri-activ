import React, {FC} from "react";
import useObservable from "@soywod/react-use-observable";

import firebase from "./firebase";
import {auth$} from "./context";
import iconName from "./name.svg";
import iconLogout from "./logout.svg";
import iconSeparator from "./spoon.svg";

import cs from "./account.module.scss";

type AccountProps = {};

const Account: FC<AccountProps> = () => {
  const [auth] = useObservable(auth$, auth$.value);

  return (
    <div className={cs.grid}>
      <img className={cs.separator} src={iconSeparator} alt="" />
      <div className={cs.header}>MA SESSION</div>
      <img className={cs.icon} src={iconName} alt="" />
      <span>{auth.type === "authenticated" && auth.name}</span>
      <img className={cs.icon} src={iconLogout} alt="" />
      <button className={cs.signOut} onClick={() => firebase.signOut()}>
        Quitter
      </button>
    </div>
  );
};

export default Account;
