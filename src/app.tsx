import React, {FC, useEffect, useState} from "react";
import {useObservable} from "@soywod/react-use-observable";
import zipObject from "lodash/fp/zipObject";

import AuthGuard from "./auth/guard";
import {steps, encodeStep, decodeStep, currStep$} from "./modules/context";
import Nav from "./nav";
import Main from "./main";

const App: FC = () => {
  const [step] = useObservable(currStep$, currStep$.value);
  const [components, setComponents] = useState<{[key: string]: FC}>({});
  const CurrPage = components[encodeStep(step)] || (() => null);

  useEffect(() => {
    Promise.all(
      steps.keys.map(async key => {
        const {module, chapter, page} = decodeStep(key);
        return import(`./modules/module-${module}/chapter-${chapter}/page-${page}.tsx`).then(
          m => m.default,
        );
      }),
    )
      .then(zipObject(steps.keys))
      .then(setComponents);
  }, []);

  return (
    <AuthGuard>
      <Nav />
      <Main>
        <CurrPage />
      </Main>
    </AuthGuard>
  );
};

export default App;
