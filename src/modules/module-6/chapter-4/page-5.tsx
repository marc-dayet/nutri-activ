import React from "react";

import PageContainer from "../../page";
import {Paragraph, Img} from "../../page-components";
import img from "./page-5.png";

export default () => {
  return (
    <PageContainer>
      <Paragraph padder>
        <Img src={img} mode="fullscreen" />
      </Paragraph>

      <Paragraph>
        La formation distancielle étant achevée, <br />
        vous pouvez maintenant quitter l’application en cliquant en haut à droite.
      </Paragraph>
    </PageContainer>
  );
};
