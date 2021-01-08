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
        Limiter la consommation
      </Paragraph>
      <Paragraph padder>
        Privilégier les matières grasses végétales : l'huile d'olive, de colza, de noix…
      </Paragraph>
      <Paragraph padder>Favoriser la variété</Paragraph>
      <Paragraph>Limiter les graisses d’origine animale (beurre, crème,…)</Paragraph>
    </PageContainer>
  );
};

export default Page;
