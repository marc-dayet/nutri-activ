import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-15.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les recommandations pour une alimentation équilibrée</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder bold>
        Au moins 30 min/j d’activités physiques dynamiques, dont la marche
      </Paragraph>
      <Paragraph>
        Intégrer dans la vie quotidienne, l'activité sous toutes ses formes : marche, vélo,
        jardinage …
      </Paragraph>
      <Paragraph>
        Privilégier une diversité d’activités physiques : endurance, renforcement musculaire,
        souplesse, équilibre.
      </Paragraph>
      <Paragraph>
        Pour qu'elle soit profitable, elle doit être réalisée par période d’au moins 10 minutes.
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
