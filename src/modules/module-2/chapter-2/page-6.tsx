import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Img, Grid, Paragraph, List, ListItem} from "../../page-components";
import img from "./page-6.png";

import cs from "./page-5.module.scss";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les nutriments énergétiques</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-xl" />
      </Paragraph>
      <Grid position="left top">
        <div className={cs.grid}>
          <Paragraph padder bold align="left">
            Acides gras saturés (AGS)
          </Paragraph>
          <List>
            <ListItem>Beurre / crème fraiche / fromages</ListItem>
            <ListItem>Huile de palme / huile de coco</ListItem>
            <ListItem>Charcuterie</ListItem>
            <ListItem>Pâtisseries / Chocolat …</ListItem>
          </List>
        </div>
      </Grid>
    </PageContainer>
  );
};

export default Page;
