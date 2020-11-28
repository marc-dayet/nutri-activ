import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-1.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°1"
      img={img}
      statment="PNNS signifie Plan National Nutrition Sport."
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
      answer="FAUX : C’est le Programme National Nutrition Santé."
    />
  );
};

export default Page;
