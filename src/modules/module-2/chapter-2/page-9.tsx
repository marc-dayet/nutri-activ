import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Img, Paragraph} from "../../page-components";
import img from "./page-9.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les nutriments énergétiques</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-xl" />
      </Paragraph>
      <Paragraph padder bold align="left">
        Sa valeur énergétique est liée au degré d’alcool. Plus il est élevé, plus le nombre de
        calories par gramme est conséquent.
      </Paragraph>
      <Paragraph align="left">
        Contrairement aux autres nutriments il n’apporte aucun élément essentiel à notre organisme
        et, consommé excessivement, impacte négativement notre santé.
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
