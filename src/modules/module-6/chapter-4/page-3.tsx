import React from "react";

import PageContainer from "../../page";
import {Paragraph, Img} from "../../page-components";
import img from "./page-3.png";

export default () => {
  return (
    <PageContainer>
      <Paragraph padder>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
      <Paragraph>Merci de votre participation active et bravo pour votre assiduité.</Paragraph>
      <Paragraph>
        Vous avez terminé l’ensemble des modules liés à la formation distancielle.
      </Paragraph>
      <Paragraph>
        Si vous avez des questions, n’hésitez pas à vous référer au FAQ (mettre le lien).
      </Paragraph>
    </PageContainer>
  );
};
