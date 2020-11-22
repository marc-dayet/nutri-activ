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
            Le fer
          </Paragraph>
          <List>
            <ListItem>Viande rouge, charcuterie, abats</ListItem>
            <ListItem>Produits de la mer</ListItem>
            <ListItem>Œufs</ListItem>
            <ListItem>Légumineuses</ListItem>
          </List>
        </div>
        <div></div>
        <div className={cs.grid}>
          <Paragraph padder bold align="left">
            Le magnésium
          </Paragraph>
          <List>
            <ListItem>Légumes verts</ListItem>
            <ListItem>Céréales complètes</ListItem>
            <ListItem>Fruits frais et secs (banane…)</ListItem>
            <ListItem>Chocolat noir riche en cacao (75%)</ListItem>
            <ListItem>Légumineuses</ListItem>
          </List>
        </div>
        <div></div>
      </Grid>
    </PageContainer>
  );
};

export default Page;
