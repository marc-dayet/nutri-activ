import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-1.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°1"
      img={img}
      statment="Quelle est la part d’énergie dépensée par le fonctionnement de notre corps?"
      choices={[
        {
          label: "10%",
          isTrue: false,
        },
        {
          label: "20%",
          isTrue: false,
        },
        {
          label: "70%",
          isTrue: true,
        },
      ]}
      answer="70% : Au repos notre corps utilise 70% d’énergie pour fonctionner."
    />
  );
};

export default Page;
