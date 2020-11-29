import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-6.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les 9 repères du PNNS</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder bold>
        3 à 4 par jour
      </Paragraph>
      <Paragraph>
        Privilégier les produits nature, les plus riches en calcium, les moins gras et les moins
        salés : lait, fromage blanc…
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
