import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-2.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°2"
      img={img}
      statment="5 g de lipide sont équivalents à combien de cuillères à café d’huile ?"
      choices={[
        {
          label: "1 cuillère",
          isTrue: true,
        },
        {
          label: "2 cuillères",
          isTrue: false,
        },
        {
          label: "3 cuillères",
          isTrue: false,
        },
        {
          label: "4 cuillères",
          isTrue: false,
        },
      ]}
      answer="1 cuillère d’huile. Pour rappel 5 g de lipides correspondent à une cuillère à soupe d’huile."
    />
  );
};

export default Page;
