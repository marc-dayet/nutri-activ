import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-4.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°4"
      img={img}
      statment="Le Programme National Nutrition Santé recommande d’augmenter la consommation de sel."
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
