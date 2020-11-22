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
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph className={cs.paragraph} align="left">
        <List className={cs.list}>
          <ListItem>Faire 3 repas</ListItem>
          <ListItem>Eviter le grignotage</ListItem>
          <ListItem>Possibilité de prendre une collation le matin ou l’après-midi</ListItem>
          <ListItem>Respecter des horaires de repas fixes</ListItem>
        </List>
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
