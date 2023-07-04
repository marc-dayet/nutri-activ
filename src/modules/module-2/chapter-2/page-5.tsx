import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Img, Grid, Paragraph, List, ListItem} from "../../page-components";
import img from "./page-5.png";

import cs from "./page-5.module.scss";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les nutriments énergétiques</Title>
      <Paragraph>
        <Img src={img} mode="avatar-xl" />
      </Paragraph>
      <Grid position="left top">
        <div className={cs.grid}>
          <Paragraph padder bold align="left">
            Protéines d’origine végétale
          </Paragraph>
          <List>
            <ListItem>Oléagineux (amande, noisette, pistache, noix…)</ListItem>
            <ListItem>Céréales</ListItem>
            <ListItem>Légumineuses</ListItem>
          </List>
        </div>
        <div></div>
        <div className={cs.grid}>
          <Paragraph padder bold align="left">
            Protéines d’origine animale
          </Paragraph>
          <List>
            <ListItem>Volaille</ListItem>
            <ListItem>Poisson et fruits de mer</ListItem>
            <ListItem>Œufs</ListItem>
            <ListItem>Viande</ListItem>
            <ListItem>Abats</ListItem>
            <ListItem>Produits laitiers</ListItem>
          </List>
        </div>
        <div></div>
      </Grid>
    </PageContainer>
  );
};

export default Page;
