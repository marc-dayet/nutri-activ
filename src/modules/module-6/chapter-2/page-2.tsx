import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components";
import img1 from "./page-2-1.png";
import img2 from "./page-2-2.png";

import cs from "./page-2.module.scss";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>La lecture des étiquettes</Title>
      <Subtitle> Comprendre les valeurs nutritionnelles </Subtitle>
      <Paragraph padder>
        Pour faciliter la lecture des étiquettes nous utiliserons le code suivant :
      </Paragraph>
      <Grid>
        <Img src={img1} mode="avatar-lg" />
        <Paragraph bold>5 g de sucres = 1 morceau de sucre</Paragraph>
        <Img src={img2} mode="avatar-lg" />
        <Paragraph bold>
          5 g de lipide (AGS*) = 1 cuillère à café d’huile <br />
          <em className={cs.subparagraph}>*Acide Gras Saturé</em>
        </Paragraph>
      </Grid>
    </PageContainer>
  );
};

export default Page;
