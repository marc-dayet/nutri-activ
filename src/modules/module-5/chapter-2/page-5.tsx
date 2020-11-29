import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-5.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les 9 repères du PNNS</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder bold>
        A chaque repas selon l’appétit
      </Paragraph>
      <Paragraph>
        Contrairement à une idée reçue, les féculents ne font pas grossir en quantité raisonnable.
        Ils fournissent une énergie que le corps est capable d'utiliser progressivement.
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
