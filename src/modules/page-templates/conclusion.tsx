import React, {FC} from "react";

import PageContainer from "../page";
import {Title, Paragraph, Img} from "../page-components";

type PageConclusionProps = {
  img: string;
};

const PageConclusion: FC<PageConclusionProps> = ({img, children}) => {
  return (
    <PageContainer>
      <Title>{children}</Title>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </PageContainer>
  );
};

export default PageConclusion;
