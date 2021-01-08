import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Subtitle, Paragraph, Grid, Img} from "../../page-components";
import cs from "./page-2.module.scss";
import img1 from "./page-2-1.png";
import img2 from "./page-2-2.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les différents types d’activité physique</Title>
      <Grid>
        <Img src={img1} mode="avatar-lg" />
        <Paragraph className={cs.paragraph}>
          <Subtitle className={cs.subtitleLeft}>Souplesse</Subtitle>
          Travaux ménagers, tai chi, yoga, Pilate, exercices d’assouplissement (étirements)…
        </Paragraph>
        <Img src={img2} mode="avatar-lg" />
        <Paragraph className={cs.paragraph}>
          <Subtitle className={cs.subtitleRight}>Équilibre</Subtitle>
          Se tenir debout sur une jambe puis en fermant les yeux, marcher en suivant une ligne,
          vélo, trottinette, danse, pétanque, yoga, tai-chi, marche en arrière, sur les côtés, sur
          les talons, sur les pointes de pieds, exercices d’équilibre sur sols instables…
        </Paragraph>
      </Grid>
    </PageContainer>
  );
};

export default Page;
