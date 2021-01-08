import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-4.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°4"
      img={img}
      statment="L’équilibre alimentaire se construit sur un seul repas."
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
      answer="FAUX : Il se construit sur plusieurs repas dans la journée voire dans la semaine et rime avec activité physique régulière."
    />
  );
};

export default Page;
