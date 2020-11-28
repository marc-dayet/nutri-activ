import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components";
import cs from "./page-1.module.scss";
import img1 from "./page-1-1.png";
import img2 from "./page-1-2.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les différents types d’activité physique</Title>
      <Grid>
        <Img src={img1} mode="avatar-lg" />
        <Paragraph className={cs.paragraph}>
          <Subtitle className={cs.subtitle}>Endurance</Subtitle>
          Marche rapide, montée d’escalier, travaux ménagers, bricolage, jardinage, vélo, natation,
          course à pied, gymnastique…
        </Paragraph>
        <Img src={img2} mode="avatar-lg" />
        <Paragraph className={cs.paragraph}>
          <Subtitle className={cs.subtitle}>Renforcement musculaire</Subtitle>
          Marche rapide, montée d’escalier, bricolage avec travaux de force, jardinage : creuser,
          bêcher, pelleter, port de charges lourdes, vélo, danse, natation, gymnastique, yoga,
          Pilate, utilisation d’appareil de renforcement musculaire…
        </Paragraph>
      </Grid>
    </PageContainer>
  );
};

export default Page;
