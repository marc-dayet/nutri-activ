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
            Acides gras monoinsaturés (AGMI)
          </Paragraph>
          <List>
            <ListItem>Huile d’olive et colza</ListItem>
            <ListItem>Fruits à coques (noisettes, amandes …)</ListItem>
            <ListItem>Avocat</ListItem>
            <ListItem>Graisses de volaille …</ListItem>
          </List>
        </div>
        <div></div>
        <div className={cs.grid}>
          <Paragraph padder bold align="left">
            Acides gras polyinsaturés (AGPI)
          </Paragraph>
          <List>
            <ListItem>Oméga-3 : poissons gras, huile de lin</ListItem>
            <ListItem>
              Oméga 6 : Huile de pépin de raisin, de tournesol, de soja, de noix …
            </ListItem>
          </List>
        </div>
        <div></div>
      </Grid>
    </PageContainer>
  );
};

export default Page;
