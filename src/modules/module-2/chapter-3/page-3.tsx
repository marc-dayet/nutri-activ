import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-3.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°3"
      img={img}
      statment="Patrick, à cause de problème dentaire, ne mange plus de viande. Que doit-il manger pour combler son déficit en protéines ?"
      hasMultipleChoices
      choices={[
        {
          label: "Du poisson",
          isTrue: true,
        },
        {
          label: "Des œufs",
          isTrue: true,
        },
        {
          label: (
            <>
              Des céréales
              <br /> complètes
            </>
          ),
          isTrue: false,
        },
        {
          label: (
            <>
              Des produits <br />
              laitiers
            </>
          ),
          isTrue: true,
        },
      ]}
      answer="Du poisson, des œufs et des produits laitiers"
    />
  );
};

export default Page;
