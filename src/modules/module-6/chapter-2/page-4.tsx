import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Subtitle, Paragraph, Img} from "../../page-components";
import img from "./page-4.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>La lecture des étiquettes</Title>
      <Subtitle>Le Nutri-Score</Subtitle>
      <br />
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
