import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Subtitle, Paragraph, Img, Grid} from "../../page-components";
import img1 from "./page-1-1.png";
import img2 from "./page-1-2.png";
import img3 from "./page-1-3.png";
import img4 from "./page-1-4.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les modes de consommation de nos aliments</Title>
      <Subtitle>Nos aliments peuvent êtres consommés sous différentes formes !</Subtitle>
      <br />
      <br />
      <Grid>
        <Img src={img1} mode="avatar-md" />
        <Paragraph>Il est important d’alterner légumes/fruits crus et cuits.</Paragraph>
        <Img src={img2} mode="avatar-md" />
        <Paragraph>
          Les produits surgelés ou en conserve ont approximativement les mêmes valeurs que les
          produits frais.
        </Paragraph>
        <Img src={img3} mode="avatar-md" />
        <Paragraph>Attention à la préparation de la viande et du poisson crus.</Paragraph>
        <Img src={img4} mode="avatar-md" />
        <Paragraph>Manger de saison permet de réduire les coûts.</Paragraph>
      </Grid>
    </PageContainer>
  );
};

export default Page;
