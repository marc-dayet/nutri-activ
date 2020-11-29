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
          label: "1 fois par jour",
          isTrue: false,
        },
        {
          label: "5 fois par semaine",
          isTrue: true,
        },
        {
          label: "À tous les repas",
          isTrue: false,
        },
        {
          label: "Seulement le midi",
          isTrue: false,
        },
      ]}
      answer="5 fois par semaine"
    />
  );
};

export default Page;
