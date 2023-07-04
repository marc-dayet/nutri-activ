import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-12.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les recommandations pour une alimentation équilibrée</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder bold>
        Éviter les consommations excessives
      </Paragraph>
      <Paragraph padder>- Les boissons sucrées font partie des produits sucrés.</Paragraph>
      <Paragraph>
        - Limiter la consommation d’aliments sucrés et gras à la fois <br /> (pâtisseries, chocolat,
        desserts lactés et crèmes glacées).
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
