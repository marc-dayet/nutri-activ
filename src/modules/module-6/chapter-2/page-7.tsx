import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img, List, ListItem} from "../../page-components";
import cs from "./page-7.module.scss";
import img from "./page-7.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Comment limiter le gaspillage ?</Title>
      <Paragraph>
        <Img src={img} mode="avatar-md" />
      </Paragraph>
      <List>
        <ListItem className={cs.listItem}>
          <strong>Organiser ses courses</strong> : préparer sa liste, respecter le « bon » ordre,
        </ListItem>
        <ListItem className={cs.listItem}>
          <strong>Faire attention à la DLC</strong> pendant les courses et dans son réfrigérateur,
        </ListItem>
        <ListItem className={cs.listItem}>
          <strong>Acheter les produits frais en plus petite quantité</strong> ou les congeler avant
          la DLC,
        </ListItem>
        <ListItem className={cs.listItem}>
          <strong>Veiller à la bonne conservation</strong> des aliments,
        </ListItem>
        <ListItem className={cs.listItem}>
          <strong>Faire attention à l’hygiène</strong> du réfrigérateur,
        </ListItem>
        <ListItem className={cs.listItem}>
          <strong>Optimiser les doses</strong> en fonction du nombre de personnes et de l’appétit,
        </ListItem>
        <ListItem className={cs.listItem}>
          <strong>Utiliser les restes</strong> et/ou les accommoder …
        </ListItem>
      </List>
    </PageContainer>
  );
};

export default Page;
