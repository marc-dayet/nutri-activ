import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-3.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°3"
      img={img}
      statment="L’équilibre alimentaire et l’activité physique doivent être traités séparément."
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
      answer="Faux"
    />
  );
};

export default Page;
