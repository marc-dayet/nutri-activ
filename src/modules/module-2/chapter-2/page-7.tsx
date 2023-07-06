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
            <ListItem>Olives et huile d’olive</ListItem>
            <ListItem>Noisettes, cacahuètes, amandes, pistaches et leurs huiles</ListItem>
            <ListItem>Avocat et huile d’avocat</ListItem>
            <ListItem>Graisses de volaille</ListItem>
          </List>
        </div>
        <div></div>
        <div className={cs.grid}>
          <Paragraph padder bold align="left">
            Acides gras polyinsaturés (AGPI)
          </Paragraph>
          <List>
            <ListItem>
              Oméga-3 : poissons gras, huile de colza, noix et huile de noix, graines et huile de
              lin
            </ListItem>
            <ListItem>
              Oméga-6 : graines et huile de tournesol ou de sésame, huile de pépins de raisin, ...
            </ListItem>
          </List>
        </div>
        <div></div>
      </Grid>
    </PageContainer>
  );
};

export default Page;
