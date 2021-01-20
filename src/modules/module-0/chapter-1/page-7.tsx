import React, {FC} from "react";
import PageContainer from "../../page";
import {Title, Paragraph, Img, Grid, List, ListItem} from "../../page-components";
import cs from "./page-7.module.scss";
import img1 from "./page-7-1.png";
import img2 from "./page-7-2.png";
import img3 from "./page-7-3.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Déroulé de la formation en distanciel</Title>
      <Paragraph bold padder>
        Chaque module est construit de la manière suivante :
      </Paragraph>
      <Grid padder>
        <Img src={img1} mode="avatar-lg" />
        <List>
          <ListItem bold>
            Une vidéo d’introduction, les messages clés à retenir, un test de connaissances, une
            vidéo de conclusion.
          </ListItem>
        </List>
        <Img src={img2} mode="avatar-lg" />
        <List>
          <ListItem bold>
            Avant chaque module, vous devez vous approprier les contenus présents dans le livret
            ressource que vous avez reçu.
          </ListItem>
        </List>
      </Grid>
      <div className={cs.grid}>
        <img className={cs.img} src={img3} alt="" />
        <Paragraph>Lors du test, ne gardez pas le livret ressource sous les yeux</Paragraph>
      </div>
    </PageContainer>
  );
};

export default Page;
