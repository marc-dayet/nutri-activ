import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-2.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°2"
      img={img}
      statment="Il faut consommer des féculents (pains, céréales, légumineuses…)."
      hasMultipleChoices
      choices={[
        {
          label: "1 fois par semaine",
          isTrue: false,
        },
        {
          label: "5 fois par semaine",
          isTrue: false,
        },
        {
          label: "Tous les jours",
          isTrue: true,
        },
        {
          label: "Seulement le midi",
          isTrue: false,
        },
      ]}
      answer="Tous les jours, de préférence complets, car ils fournissent de l’énergie à notre corps tout au long de la journée."
    />
  );
};

export default Page;
