import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-1.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°1"
      img={img}
      statment="Quelle part de nos dépenses énergétiques représente l’activité physique ?"
      choices={[
        {
          label: "70%",
          isTrue: false,
        },
        {
          label: "20%",
          isTrue: true,
        },
        {
          label: "10%",
          isTrue: false,
        },
      ]}
      answer="L'activité physique représente 20% de nos dépenses énergétiques."
    />
  );
};

export default Page;
