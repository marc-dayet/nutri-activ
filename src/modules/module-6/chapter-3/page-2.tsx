import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-2.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°2"
      img={img}
      statment="7 g de lipides sont équivalent à combien de cuillères à café d’huile ?"
      choices={[
        {
          label: "1 cuillère d’huile",
          isTrue: false,
        },
        {
          label: "2 cuillères d’huile",
          isTrue: true,
        },
        {
          label: "3 cuillères d’huile",
          isTrue: false,
        },
        {
          label: "4 cuillères d’huile",
          isTrue: false,
        },
      ]}
      answer="2 cuillères d’huile"
    />
  );
};

export default Page;
