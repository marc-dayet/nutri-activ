import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Img, Grid, Paragraph, List, ListItem} from "../../page-components";
import img from "./page-11.png";

import cs from "./page-5.module.scss";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les nutriments non énergétiques</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Grid position="left top">
        <div className={cs.grid}>
          <Paragraph padder bold align="left">
            Le calcium
          </Paragraph>
          <List>
            <ListItem>Produits laitiers</ListItem>
            <ListItem>Légumes à feuille verte</ListItem>
            <ListItem>Oléagineux</ListItem>
            <ListItem>Certaines eaux minéralisées</ListItem>
          </List>
        </div>
        <div></div>
        <div className={cs.grid}>
          <Paragraph padder bold align="left">
            Le sodium
          </Paragraph>
          <List>
            <ListItem>Sel de table</ListItem>
            <ListItem>Viande, poissons, oeufs</ListItem>
            <ListItem>Charcuterie</ListItem>
            <ListItem>Fromage</ListItem>
            <ListItem>Préparations industrielles</ListItem>
          </List>
        </div>
        <div></div>
      </Grid>
    </PageContainer>
  );
};

export default Page;
