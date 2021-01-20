import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-1.png";

import cs from "./page-1.module.scss";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title className={cs.title}>
        Nous vous souhaitons la bienvenue <br />à la formation pour animer <br />
        Les Ateliers Nutri Activ'
      </Title>
      <Paragraph align="center" padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph bold>
        La première séquence présentera les objectifs et votre parcours de formation. <br />
        Vous approfondirez ensuite vos connaissances en lien avec les modules d’animation <br />
        pour animer Les ateliers Nutri Activ'.
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
