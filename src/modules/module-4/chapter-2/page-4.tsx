import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components";
import img1 from "./page-4-1.png";
import img2 from "./page-4-2.png";
import img3 from "./page-4-3.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Hydratation</Title>
      <Subtitle>Recommandations du Programme National Nutrition Santé</Subtitle>
      <Grid position="center top" padder>
        <Img src={img1} mode="avatar-md" />
        <Paragraph>
          <strong>Boissons non sucrées</strong>
          <br />1 à 1,5 litre par jour pendant et hors repas.
        </Paragraph>
        <Img src={img2} mode="avatar-md" />
        <Paragraph>
          <strong>Boissons sucrées</strong>
          <br />à limiter
        </Paragraph>
        <Img src={img3} mode="avatar-md" />
        <Paragraph>
          <strong>Alcool</strong>
          <br />♂ 3 verres - ♀ 2 verres par jour et maximum 10 verres par semaine avec des jours
          sans consommation
        </Paragraph>
      </Grid>
    </PageContainer>
  );
};

export default Page;
