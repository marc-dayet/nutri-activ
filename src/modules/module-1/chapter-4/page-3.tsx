import React from "react";

import {useTheme} from "../../../theme";
import PageConclusion from "../../page-templates/conclusion";
import img from "./page-3.png";
import navItem from "../../module-2/nav-item";

export default () => {
  const [theme] = useTheme();

  return (
    <PageConclusion img={img}>
      Vous avez terminé le module 1 !<br />
      Rendez-vous au module 2 : <strong className={theme.secondary}>{navItem.label}</strong>
    </PageConclusion>
  );
};
