import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img, List, ListItem} from "../../page-components";
import cs from "./page-3.module.scss";
import img from "./page-3.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Équilibre alimentaire et activité physique</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph align="left">
        Equilibre alimentaire et activité physique sont indissociables. <br />
        Ils permettent de se préserver :
      </Paragraph>
      <List className={cs.list}>
        <ListItem bold>de certaines maladies</ListItem>
        <ListItem bold>de certains facteurs de risque.</ListItem>
      </List>
    </PageContainer>
  );
};

export default Page;
