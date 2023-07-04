import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-9.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les recommandations pour une alimentation équilibrée</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder bold>
        Au moins 1 fois par jour
      </Paragraph>
      <Paragraph padder>Pour les personnes de moins de 75 ans :</Paragraph>
      <Paragraph padder>Viande : limiter à 500 g par semaine</Paragraph>
      <Paragraph padder>
        Poisson : 2 fois par semaine, dont un poisson gras <br /> (sardines, maquereau, hareng,
        saumon)
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
