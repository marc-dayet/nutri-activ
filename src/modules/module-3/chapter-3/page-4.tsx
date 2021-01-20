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
      answer={
        <>
          FAUX : Les 30 min d’activité recommandées peuvent être fractionnées <br />
          en 3 &times; 10 min ou 2 &times; 15 min selon les capacités de chacun.
        </>
      }
    />
  );
};

export default Page;
