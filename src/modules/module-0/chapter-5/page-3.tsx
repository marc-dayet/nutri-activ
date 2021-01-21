import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img, List, ListItem} from "../../page-components";
import cs from "./page-3.module.scss";
import img1 from "./page-3-1.png";
import img2 from "./page-3-2.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Déroulé de la formation en distanciel</Title>
      <Paragraph bold padder>
        Au cours de chaque module, si vous avez des questions ou des remarques, <br />
        vous pouvez les inscrire via un lien dédié. Deux options sont possibles :
      </Paragraph>
      <div className={cs.grid}>
        <Img className={cs.img1} src={img1} mode="avatar-lg" />
        <List>
          <ListItem>
            <strong>Vous souhaitez le faire à la fin de chaque module</strong> : utilisez
            impérativement le même ordinateur, cliquez sur « terminer » tout en bas du questionnaire
            afin d’enregistrer vos réponses et <strong>pouvoir y revenir</strong>.
          </ListItem>
          <br />

          <ListItem>
            <strong>Vous souhaitez le faire à la fin du distanciel</strong> : notez vos questions
            tout au long du distanciel puis une fois les modules terminés, suivez le lien pour
            envoyer vos questions. Cliquez ensuite sur «terminer» pour les enregistrer.
          </ListItem>
        </List>
      </div>
      <div className={cs.subgrid}>
        <img className={cs.img2} src={img2} alt="" />
        <Paragraph align="left">
          Tous les commentaires saisis et enregistrés seront envoyés au formateur <br />
          pour l’étape suivante : la web-conférence.
        </Paragraph>
      </div>
    </PageContainer>
  );
};

export default Page;
