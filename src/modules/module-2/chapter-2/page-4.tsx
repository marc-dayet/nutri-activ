import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-4.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les différents nutriments</Title>
      <Paragraph padder>
        Les nutriments sont les éléments qui composent nos aliments. <br />
        Ils sont indispensables au bon fonctionnement de notre corps.
      </Paragraph>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
