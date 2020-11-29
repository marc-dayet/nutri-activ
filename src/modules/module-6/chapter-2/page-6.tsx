import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img, Grid} from "../../page-components";
import img1 from "./page-6-1.png";
import img2 from "./page-6-2.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Préserver nos aliments du panier à l’assiette</Title>
      <Grid position="center top">
        <Img src={img1} mode="avatar-lg" />
        <Paragraph>
          <strong>Pendant et après la consommation</strong> <br />
          cuire les viandes hachées, les poissons, les saucisses, les boulettes à cœur, respecter
          les DLC et mettre les produits non consommés dans une boîte hermétique.
        </Paragraph>
        <Img src={img2} mode="avatar-lg" />
        <Paragraph>
          <strong>Nettoyage</strong> <br />
          laver régulièrement le réfrigérateur, les éponges, les torchons …
        </Paragraph>
      </Grid>
    </PageContainer>
  );
};

export default Page;
