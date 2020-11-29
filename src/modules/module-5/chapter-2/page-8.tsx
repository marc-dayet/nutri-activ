import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-8.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les 9 repères du PNNS</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder bold>
        Limiter la consommation <br />À consommer surtout au cours des repas et des collations.
      </Paragraph>
      <Paragraph padder>
        - les boissons sucrées (sirops, sodas, boissons sucrées à base de fruits, nectars…) et aux
        bonbons.
      </Paragraph>
      <Paragraph>
        - les aliments gras et sucrés à la fois (pâtisseries, viennoiseries, crèmes desserts,
        chocolat, glaces, barres chocolatées…).
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
