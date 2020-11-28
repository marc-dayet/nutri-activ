import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-3.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les différents types d’activité physique</Title>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
