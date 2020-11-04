import React, {Suspense, FC} from "react";
import {useObservable} from "@soywod/react-use-observable";
import cn from "classnames";

import logo from "./logo.svg";
import Account from "./auth/account";
import {currStep$, lastStep$} from "./modules/context";

import cs from "./nav.module.scss";

const req = require.context("./modules", true, /module-\d+\/nav-item.ts$/);
const modules = req
  .keys()
  .map<{default: {theme: string; icon: string; label: string}}>(req)
  .map(module => module.default);

const Nav: FC = () => {
  const [lastStep] = useObservable(lastStep$, lastStep$.value);
  const [step] = useObservable(currStep$, currStep$.value);

  function setModule(nextModule: number) {
    if (lastStep.module >= nextModule) {
      currStep$.next({module: nextModule, chapter: 1, page: 1});
    }
  }

  return (
    <Suspense fallback={null}>
      <div className={cs.nav}>
        <img className={cs.logo} src={logo} alt="" />
        <nav className={cs.modules}>
          {modules.map(({theme, icon, label}, module) => (
            <button
              key={module}
              className={cn(cs.module, theme, {[cs.active]: module === step.module})}
              onClick={() => setModule(module)}
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
  );
};

export default Nav;
