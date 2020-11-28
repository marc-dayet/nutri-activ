import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-1.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>PNNS – Programme National Nutrition Santé</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder>
        La santé est un des piliers de la qualité de vie, aux côtés de la sécurité, <br /> des
        relations affectives et des ressources personnelles. <br /> Développer ses ressources
        personnelles, c’est améliorer sa santé.
      </Paragraph>
      <br />

      <Paragraph bold>Lancé en janvier 2001, il est reconduit tous les 5 ans.</Paragraph>
    </PageContainer>
  );
};

export default Page;
