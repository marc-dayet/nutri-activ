import React, {FC} from "react";
import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-8.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Déroulé de la formation en distanciel</Title>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
