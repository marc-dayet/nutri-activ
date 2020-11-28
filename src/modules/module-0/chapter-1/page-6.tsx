import React, {FC} from "react";
import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import cs from "./page-6.module.scss";
import img1 from "./page-6-1.png";
import img2 from "./page-6-2.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Présentation des ateliers Nutri Activ'</Title>
      <Paragraph bold padder>
        Les ateliers sont composés de 6 modules :
      </Paragraph>
      <Paragraph padder>
        <Img src={img1} mode="avatar-lg" />
      </Paragraph>
      <div className={cs.grid}>
        <img className={cs.img} src={img2} alt="" />
        <Paragraph>
          Pour information, la formation en distanciel va suivre le même déroulé.
        </Paragraph>
      </div>
    </PageContainer>
  );
};

export default Page;
