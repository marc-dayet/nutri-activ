import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-10.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les recommandations pour une alimentation équilibrée</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder bold>
        À limiter
      </Paragraph>
      <Paragraph padder>Avant 75 ans : limiter à 150 g/semaine</Paragraph>
      <Paragraph padder>Après 75 ans : pas tous les jours, en quantités modérées</Paragraph>
      <Paragraph>Privilégier le jambon blanc et le jambon de volaille</Paragraph>
    </PageContainer>
  );
};

export default Page;
