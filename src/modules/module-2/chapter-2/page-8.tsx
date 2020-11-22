import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Img, Grid, Paragraph, List, ListItem} from "../../page-components";
import img from "./page-8.png";

import cs from "./page-5.module.scss";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les nutriments énergétiques</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Grid position="left top">
        <div className={cs.grid}>
          <Paragraph padder bold align="left">
            Acides gras polyinsaturés (simples)
          </Paragraph>
          <List>
            <ListItem>Glucose (fruits, miel, produits industriels)</ListItem>
            <ListItem>Fructose (fruits et légumes, miel)</ListItem>
            <ListItem>Saccharose (sucre de table)</ListItem>
            <ListItem>Lactose et galactose (produits laitiers)</ListItem>
          </List>
        </div>
        <div></div>
        <div className={cs.grid}>
          <Paragraph padder bold align="left">
            Complexes
          </Paragraph>
          <List>
            <ListItem>Pommes de terre et patates douces</ListItem>
            <ListItem>Céréales et produits céréaliers</ListItem>
            <ListItem>Légumineuses</ListItem>
            <ListItem>Tubercules</ListItem>
            <ListItem>Lactose et galactose (produits laitiers)</ListItem>
          </List>
        </div>
        <div></div>
      </Grid>
    </PageContainer>
  );
};

export default Page;
