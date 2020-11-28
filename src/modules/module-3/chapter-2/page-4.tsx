import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Grid, List, ListItem, Img} from "../../page-components";
import img from "./page-4.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les bienfaits de l’activité physique</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Grid>
        <div></div>
        <List>
          <ListItem>Réduit les risques d’apparition de certaines maladies</ListItem>
          <ListItem>Améliore le sommeil</ListItem>
          <ListItem>Réduit le stress</ListItem>
        </List>
        <div></div>
        <List>
          <ListItem>Améliore la qualité de vie des personnes malades</ListItem>
          <ListItem>Retarde la perte d’autonomie</ListItem>
          <ListItem>Permet le maintien de la masse musculaire</ListItem>
        </List>
      </Grid>
    </PageContainer>
  );
};

export default Page;
