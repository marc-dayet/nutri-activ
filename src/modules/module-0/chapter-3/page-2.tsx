import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import cs from "./page-2.module.scss";
import img from "./page-2.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Le parcours de formation</Title>
      <Paragraph className={cs.paragraph} bold align="left" padder>
        Le schéma ci-dessous présente votre parcours pour la totalité de la <br />
        formation des Ateliers Nutri Activ'.
      </Paragraph>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
