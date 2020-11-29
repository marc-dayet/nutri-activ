import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-1.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°1"
      img={img}
      statment="21 g de sucres sont équivalent à :"
      choices={[
        {
          label: "1 morceau de sucre",
          isTrue: false,
        },
        {
          label: "2 morceaux de sucre",
          isTrue: true,
        },
        {
          label: "3 morceaux de sucre",
          isTrue: false,
        },
        {
          label: "4 morceaux de sucre",
          isTrue: false,
        },
      ]}
      answer="2 morceaux de sucre"
    />
  );
};

export default Page;
