import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Img, Grid, Paragraph, List, ListItem} from "../../page-components";
import img from "./page-10.png";

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
          <List>
            <ListItem>Fruits</ListItem>
            <ListItem>Légumes</ListItem>
            <ListItem>Produits céréaliers</ListItem>
            <ListItem>Légumineuses</ListItem>
          </List>
        </div>
      </Grid>
    </PageContainer>
  );
};

export default Page;
