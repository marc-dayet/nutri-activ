import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Grid, Img, List, ListItem} from "../../page-components";
import img1 from "./page-7-1.png";
import img2 from "./page-7-2.png";
import img3 from "./page-7-3.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les recommandations</Title>
      <Grid padder>
        <Img src={img1} mode="avatar-lg" />
        <Paragraph bold>Penser à s’échauffer au début et s’étirer à la fin</Paragraph>
        <Img src={img2} mode="avatar-lg" />
        <Paragraph bold>Penser à s’hydrater</Paragraph>
        <Img src={img3} mode="avatar-lg" />
        <Paragraph bold>Adapter son environnement (sécurité, espace, aération …)</Paragraph>
      </Grid>
      <br />
      <Paragraph>
        <List padder>
          <ListItem bold>Bouger par périodes d’au moins 10 minutes</ListItem>
          <ListItem bold>
            Écourter le temps passé assis et se lever pour marcher un peu toutes les 2 heures
          </ListItem>
          <ListItem bold>Toujours adapter l’activité selon ses capacités et ses envies</ListItem>
        </List>
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
