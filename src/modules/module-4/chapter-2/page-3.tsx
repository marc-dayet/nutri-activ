import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-3.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Sens et alimentation</Title>
      <Paragraph padder>
        <Img src={img} mode="halfscreen" />
      </Paragraph>
      <Paragraph padder>
        Pour percevoir le goût d’un aliment, nous mobilisons plusieurs sens en même temps. <br />
        <strong>
          Le goût est le seul sens qui ne peut fonctionner pleinement sans tous les autres.
        </strong>
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
