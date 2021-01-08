import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-4.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°4"
      img={img}
      statment="Il est nécessaire de faire au moins 30 min d’activité physique en continu pour en mesurer les bénéfices."
      choices={[
        {
          label: "Vrai",
          isTrue: false,
        },
        {
          label: "Faux",
          isTrue: true,
        },
      ]}
      answer="FAUX : Les 30 min d’activité recommandées peuvent être fractionnées en 3 x 10 min ou 2 x 15 min selon les capacités de chacun."
    />
  );
};

export default Page;
