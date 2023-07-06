import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-1.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°1"
      img={img}
      statment="21 g de sucre sont équivalents à combien de morceaux de sucre ?"
      choices={[
        {
          label: "1 morceau",
          isTrue: false,
        },
        {
          label: "2 morceaux",
          isTrue: false,
        },
        {
          label: "3 morceaux",
          isTrue: false,
        },
        {
          label: "4 morceaux",
          isTrue: true,
        },
      ]}
      answer="4 morceaux de sucre. Pour rappel, 5 g de sucre correspondent à un morceau de sucre."
    />
  );
};

export default Page;
