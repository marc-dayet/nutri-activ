import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Subtitle, Paragraph, Img} from "../../page-components";
import img from "./page-2.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les grands déterminants du comportement alimentaire</Title>
      <Subtitle>Une multitude de facteurs viennent impacter nos choix alimentaires.</Subtitle>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
