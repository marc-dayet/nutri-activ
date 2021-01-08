import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-12.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les 9 repères du PNNS</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder bold>
        Au moins 30 minutes d’activité physique 5 jours par semaine ou plus.
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
