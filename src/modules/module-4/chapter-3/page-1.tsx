import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-1.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°1"
      img={img}
      statment="La satiété intervient pendant que l’on mange (appelé l’ingestion)"
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
      answer="FAUX : Pendant l’ingestion on parle de rassasiement alors que l’état de satiété intervient après le repas."
    />
  );
};

export default Page;
