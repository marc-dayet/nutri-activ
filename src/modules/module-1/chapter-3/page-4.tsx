import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-4.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Affirmation n°4"
      img={img}
      statment="Il existe plusieurs facteurs qui vont venir influencer notre manière de manger."
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
      answer="VRAI : Nos choix alimentaires sont influencés par une multitude de facteurs (lien social, aspects individuels, facteurs socio-culturels, environnement alimentaire…)."
    />
  );
};

export default Page;
