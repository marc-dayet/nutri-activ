import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-3.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°3"
      img={img}
      statment="Une portion de fruits ou légumes équivaut à …"
      hasMultipleChoices
      choices={[
        {
          label: "80 à 100 g",
          isTrue: false,
        },
        {
          label: "100 à 150 g",
          isTrue: true,
        },
        {
          label: "1 fruit/légume entier",
          isTrue: false,
        },
        {
          label: (
            <>
              1 fruit/légume de
              <br />
              la taille d’un poing
            </>
          ),
          isTrue: false,
        },
      ]}
      answer="100 à 150 g"
    />
  );
};

export default Page;
