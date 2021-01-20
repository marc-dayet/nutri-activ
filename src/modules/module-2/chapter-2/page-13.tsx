import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Img, Grid, Paragraph, List, ListItem} from "../../page-components";
import img from "./page-13.png";

import cs from "./page-5.module.scss";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les nutriments non énergétiques</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-xl" />
      </Paragraph>
      <Grid position="left top">
        <div className={cs.grid}>
          <Paragraph padder bold align="left">
            Vitamine D
          </Paragraph>
          <List padder>
            <ListItem>Poissons gras</ListItem>
            <ListItem>Produits laitiers non écrémés</ListItem>
          </List>
          <Paragraph className={cs.paragraph} align="left">
            NB : le soleil est aussi source de vitamine D{" "}
          </Paragraph>
        </div>
        <div></div>
        <div className={cs.grid}>
          <Paragraph padder bold align="left">
            Vitamine B12
          </Paragraph>
          <List>
            <ListItem>Viande, abats</ListItem>
            <ListItem>Coquillages, Poissons gras</ListItem>
            <ListItem>Œufs</ListItem>
            <ListItem>Fromages</ListItem>
          </List>
        </div>
        <div></div>
        <div className={cs.grid}>
          <Paragraph padder bold align="left">
            Vitamine C
          </Paragraph>
          <List>
            <ListItem>Fruits et légumes crus</ListItem>
          </List>
        </div>
        <div></div>
      </Grid>
    </PageContainer>
  );
};

export default Page;
