import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-2.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°2"
      img={img}
      statment="Faire le ménage est aussi considéré comme une activité physique."
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
      answer="VRAI : Il y a une dépense énergétique plus importante que le repos ou la position sédentaire."
    />
  );
};

export default Page;
