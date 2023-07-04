import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-7.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les recommandations pour une alimentation équilibrée</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder bold>
        1 petite poignée par jour
      </Paragraph>
      <Paragraph>Sans sel ajouté : noix, noisettes, amandes, pistaches…</Paragraph>
      <Paragraph>Non recommandé pour les personnes présentant des allergies identifiées.</Paragraph>
    </PageContainer>
  );
};

export default Page;
