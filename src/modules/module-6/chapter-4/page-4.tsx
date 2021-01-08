import React from "react";

import PageContainer from "../../page";
import {Paragraph, Img} from "../../page-components";
import img from "./page-4.png";

export default () => {
  return (
    <PageContainer>
      <Paragraph padder>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </PageContainer>
  );
};
