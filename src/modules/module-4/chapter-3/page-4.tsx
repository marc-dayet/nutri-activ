import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-4.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°4"
      img={img}
      statment="Avec l’avancée en âge le risque de déshydratation est plus grand."
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
      answer="VRAI : Plus on vieillit plus le risque augmente car la perception de soif s’atténue à partir de 55 ans."
    />
  );
};

export default Page;
