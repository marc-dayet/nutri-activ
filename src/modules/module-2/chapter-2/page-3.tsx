import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, List, ListItem, Paragraph, Img} from "../../page-components";
import img from "./page-3.png";
import cs from "./page-3.module.scss";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les principes du rythme alimentaire</Title>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
      <Paragraph className={cs.paragraph} align="left">
        <List className={cs.list}>
          <ListItem className={cs.listItem}>Faire 3 repas</ListItem>
          <ListItem className={cs.listItem}>Eviter le grignotage</ListItem>
          <ListItem className={cs.listItem}>
            Possibilité de prendre une collation le matin ou l’après-midi
          </ListItem>
          <ListItem className={cs.listItem}>Respecter des horaires de repas fixes</ListItem>
        </List>
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
