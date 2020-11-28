import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, List, ListItem, Paragraph, Img} from "../../page-components";
import img from "./page-2.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Objectifs de la formation</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph align="left" bold padder>
        Le programme de formation a pour objectifs de : </Paragraph>
      <Paragraph align="left">
        <List>
          <ListItem>transmettre les savoirs nécessaires à l'animation des ateliers Nutri Activ’</ListItem>
          <ListItem>apprendre/maitriser les techniques d'animation adaptées permettant de favoriser la motivation et le changement de comportement</ListItem>
        </List>
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
