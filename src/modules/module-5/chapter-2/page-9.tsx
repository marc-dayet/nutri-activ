import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-9.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les 9 repères du PNNS</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder bold>
        À volonté
      </Paragraph>
      <Paragraph padder>
        <strong>1 à 1,5 litre par jour</strong>, pendant et en dehors des repas.
      </Paragraph>
      <Paragraph padder>
        <strong>Le café, le thé, la tisane, la soupe et autres boissons sans sucres</strong> peuvent
        aussi être pris en compte.
      </Paragraph>
      <Paragraph>
        <strong>Limiter</strong> les boissons sucrées.{" "}
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
