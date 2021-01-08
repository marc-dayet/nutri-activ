import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph} from "../../page-components";
import cs from "./page-3.module.scss";
import img1 from "./page-3-1.png";
import img2 from "./page-3-2.png";
import img3 from "./page-3-3.png";
import img4 from "./page-3-4.png";
import img5 from "./page-3-5.png";
import img6 from "./page-3-6.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Le parcours de formation</Title>
      <div className={cs.grid}>
        <img className={cs.img} src={img1} alt="" />
        <Paragraph align="left" bold>
          Vous avez déjà réalisé la procédure de sélection.
        </Paragraph>
        <img className={cs.img} src={img2} alt="" />
        <Paragraph align="left" bold>
          Vous entrez actuellement dans la formation en distanciel pour a<br /> minima 3 semaines.
        </Paragraph>
        <img className={cs.img} src={img3} alt="" />
        <Paragraph align="left" bold>
          Une web-conférence sera organisée pour répondre aux questions <br />
          sur le contenu du distanciel.
        </Paragraph>
        <img className={cs.img} src={img4} alt="" />
        <Paragraph align="left" bold>
          Un point de situation sera réalisé avec le formateur avant votre <br />
          passage à l’étape suivante.
        </Paragraph>
        <img className={cs.img} src={img5} alt="" />
        <Paragraph align="left" bold>
          Pour terminer, vous participerez à la formation présentielle pour <br />
          s'approprier les techniques d’animation sur 3 jours.
        </Paragraph>
      </div>
      <br />
      <div className={cs.grid}>
        <img className={cs.img} src={img6} alt="" />
        <Paragraph className={cs.subparagraph} align="left">
          Vous trouverez le descriptif de l’ensemble de la formation dans le <br />
          livret « Présentation de la formation » que vous avez déjà reçu.
        </Paragraph>
      </div>
    </PageContainer>
  );
};

export default Page;
