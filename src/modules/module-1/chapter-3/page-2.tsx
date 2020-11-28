import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-2.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°2"
      img={img}
      statment="L’objectif du PNNS est d’agir sur la nutrition."
      choices={[
        {
          label: "Vrai",
          isTrue: true,
        },
        {
          label: "Faux",
          isTrue: false,
        },
      ]}
      answer="VRAI : Il a pour objectif d’améliorer l’état de santé de l’ensemble de la population en agissant sur l’un de ses déterminants majeurs : la nutrition."
    />
  );
};

export default Page;
