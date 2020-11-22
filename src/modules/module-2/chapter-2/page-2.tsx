import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img1 from "./page-2-1.png";
import img2 from "./page-2-2.png";
import cs from "./page-2.module.scss";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>La dénutrition chez les séniors</Title>
      <Paragraph padder>
        <Img src={img1} mode="avatar-lg" />
      </Paragraph>
      <Paragraph bold padder align="left">
        C’est le déséquilibre entre les besoins de l’organisme et des apports nutritionnels
        insuffisants (en quantité ou en qualité).
      </Paragraph>
      <div className={cs.grid}>
        <img className={cs.icon} src={img2} />
        <Paragraph align="left">
          Pour les personnes de plus de 60 ans, il est important de vérifier son poids une fois par
          mois. Toute perte de poids supérieure à 2 kg par mois incite à consulter un médecin.
        </Paragraph>
      </div>
      <Paragraph align="right" className={cs.legend}>
        Source : PNNS, « Livret PNNS séniors pour les professionnels », INPES, Septembre 2006
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
