import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-4.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°4"
      img={img}
      statment="Même si la DLC est dépassée, le produit peut être consommé sans danger."
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
      answer="FAUX : Consommer un produit dont la DLC est dépassée comporte toujours un risque car la charge bactérienne peut être importante. A contrario, un produit dont la DDM est dépassée peut être consommé sans danger."
    />
  );
};

export default Page;
