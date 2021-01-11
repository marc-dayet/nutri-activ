import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-1.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>PNNS – Programme National Nutrition Santé</Title>
      <Paragraph padder>
        <Img src={img} mode="halfscreen" />
      </Paragraph>
      <Paragraph padder>
        Le PNNS (Programme National Nutrition Santé) a pour objectif d’améliorer l’état de santé de
        l’ensemble de la population en agissant sur l’un de ses déterminants majeurs : la nutrition.
      </Paragraph>
      <br />

      <Paragraph bold>Lancé en janvier 2001, il est reconduit tous les 5 ans.</Paragraph>
    </PageContainer>
  );
};

export default Page;
