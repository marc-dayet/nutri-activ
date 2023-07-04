import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img, Grid} from "../../page-components";
import img1 from "./page-5-1.png";
import img2 from "./page-5-2.png";
import img3 from "./page-5-3.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Préserver nos aliments du panier à l’assiette</Title>
      <br />
      <Grid position="center top">
        <Img src={img1} mode="avatar-lg" />
        <Paragraph>
          <strong>Pendant les courses</strong> acheter les produits frais ou surgelés en dernier,
          vérifier l’origine des produits crus (viande, poisson, fruits de mer …).
        </Paragraph>
        <Img src={img2} mode="avatar-lg" />
        <Paragraph>
          <strong>Rangement et conservation</strong> garder la température du réfrigérateur entre
          0°C et 4°C, du congélateur à -18°C, ôter les emballages, organiser son frigo par catégorie
          d’aliments.
        </Paragraph>
        <Img src={img3} mode="avatar-lg" />
        <Paragraph>
          <strong>Pendant la préparation</strong> se laver les mains, laver les fruits et les
          légumes, utiliser un ustensile par aliment.
        </Paragraph>
      </Grid>
    </PageContainer>
  );
};

export default Page;
