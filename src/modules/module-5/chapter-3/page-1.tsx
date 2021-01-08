import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-1.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°1"
      img={img}
      statment="Plus un produit est cuit, plus sa valeur nutritionnelle augmente."
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
      answer="FAUX : Sa valeur nutritionnelle diminue."
    />
  );
};

export default Page;
