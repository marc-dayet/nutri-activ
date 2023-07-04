import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-3.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°3"
      img={img}
      statment="Au total notre langue peut percevoir 6 saveurs."
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
      answer="FAUX : Notre langue perçoit jusqu’à 5 saveurs : salé, sucré, amer, acide et umami."
    />
  );
};

export default Page;
