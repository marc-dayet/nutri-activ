import React from "react";

import {useTheme} from "../../../theme";
import PageConclusion from "../../page-templates/conclusion";
import img from "./page-3.png";

export default () => {
  const [theme] = useTheme();

  return (
    <PageConclusion img={img}>
      Vous avez terminé le module 2 !<br />
      Rendez-vous au module 3 : <strong className={theme.secondary}>Activité physique</strong>
    </PageConclusion>
  );
};
