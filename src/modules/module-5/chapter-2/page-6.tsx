import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-6.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les recommandations pour une alimentation équilibrée</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder bold>
        Au moins 2 fois par semaine
      </Paragraph>
      <Paragraph>
        Lentilles, haricots, pois chiches, etc. sont naturellement riches en fibres et contiennent
        des protéines végétales. Les légumineuses peuvent être des alternatives à la viande quand
        ils sont associés à des féculents (de préférence complets ou semi-complets). Il est
        préférable de privilégier autant que possible les produits Bio.
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
