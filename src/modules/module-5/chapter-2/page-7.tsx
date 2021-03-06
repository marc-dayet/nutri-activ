import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-7.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les 9 repères du PNNS</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder bold>
        1 à 2 fois par jour
      </Paragraph>
      <Paragraph padder>Pour la viande : 100 à 150 g de viande suffisent par jour</Paragraph>
      <Paragraph padder>
        Pour les poissons : au moins 2 fois par semaine, dont une fois des poissons gras (maquereau,
        hareng, sardine, saumon) pour environ 100 à 150 g.
      </Paragraph>
      <Paragraph>Pour les œufs : 6 œufs maximum par semaine</Paragraph>
    </PageContainer>
  );
};

export default Page;
