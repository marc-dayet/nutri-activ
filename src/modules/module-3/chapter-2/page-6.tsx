import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Grid, List, ListItem, Img} from "../../page-components";
import img from "./page-6.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>
        Les recommandations de l’OMS <br />
        en termes d’activité physique
      </Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Grid padder>
        <div></div>
        <List>
          <ListItem>
            <strong>Durée</strong> : 150 minutes d’exercice modéré (par ex 5 jours &times; 30
            minutes) ou 75 minutes d’exercice soutenu par semaine
          </ListItem>
        </List>
        <div></div>
        <List>
          <ListItem>
            <strong>Intensité</strong> : modérée à élevée
          </ListItem>
          <br />
          <ListItem>
            <strong>Fréquence</strong> : régulière dans le temps et au moins 5 jours par semaine
          </ListItem>
        </List>
      </Grid>
      <Paragraph align="left" bold padder>
        Type d’activité : Alterner les catégories (souplesse, endurance, renforcement musculaire,
        équilibre)
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
