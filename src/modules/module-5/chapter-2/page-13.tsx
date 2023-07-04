import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-13.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les recommandations pour une alimentation équilibrée</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder bold>
        En moyenne 1,5 litre par jour
      </Paragraph>
      <Paragraph>Pendant et en dehors des repas.</Paragraph>
      <Paragraph>
        Le café, le thé, la tisane et autres boissons sans sucres sont pris en compte.
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
