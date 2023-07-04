import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-11.png";

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
      <Paragraph>
        Privilégier les matières grasses végétales : l'huile d'olive, de colza, de noix…
      </Paragraph>
      <Paragraph>Favoriser la variété</Paragraph>
      <Paragraph>Limiter les graisses d’origine animale (beurre, crème,…)</Paragraph>
    </PageContainer>
  );
};

export default Page;
