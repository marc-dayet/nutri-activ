import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-3.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°3"
      img={img}
      statment="Pendant les courses, les produits les plus fragiles et les produits surgelés doivent être achetés en dernier."
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
      answer="VRAI : Cela permet de maintenir la chaine du froid le plus longtemps possible."
    />
  );
};

export default Page;
