import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-10.png";

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
      <Paragraph>Préférer le sel iodé.</Paragraph>
      <Paragraph>Saler sans excès, ne pas resaler avant de goûter.</Paragraph>
      <Paragraph>
        Réduire l'ajout de sel dans la confection des plats, eau de cuisson comprise.
      </Paragraph>
      <Paragraph>
        Limiter la consommation de produits gras et salés : charcuterie, produits apéritifs salés …
      </Paragraph>
      <Paragraph>
        Une alimentation sans sel doit être encadrée par une prescription médicale.
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
