import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-2.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°2"
      img={img}
      statment="L’eau est la seule boisson qu’il est recommandé de boire pour s’hydrater ?"
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
      answer="FAUX : Les boissons comme le thé, le café, la tisane… peuvent également compter dans la dose quotidienne recommandée (1,5 litre en moyenne)."
    />
  );
};

export default Page;
