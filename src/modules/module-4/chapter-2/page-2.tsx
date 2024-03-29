import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-2.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Sens et alimentation</Title>
      <Paragraph>
        <Img src={img} mode="halfscreen" />
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
