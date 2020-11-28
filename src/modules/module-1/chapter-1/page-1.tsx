import React, {FC, useLayoutEffect, useState} from "react";

import {Intro} from "../../page-templates";
import navItem from "../nav-item";

const Page: FC = () => {
  const [isReady, setReady] = useState(false);

  useLayoutEffect(() => {
    import("./page-1-anim.js").then(() => setReady(true));
  });

  if (!isReady) {
    return null;
  }

  return <Intro subtitle={navItem.label} animation="D5BF51ADC3CB5E4BAF06476BB5B4681B" />;
};

export default Page;
