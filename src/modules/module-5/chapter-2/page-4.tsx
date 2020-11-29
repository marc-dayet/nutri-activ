import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-4.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les 9 repères du PNNS</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph bold>
        Au moins 5 portions par jour <br />1 portion (80 à 100g) = la taille d’un poing ou 2
        cuillères à soupe
      </Paragraph>
      <Paragraph>
        Les fruits et légumes peuvent être pris à chaque repas et en cas de petit creux (goûter,
        collation). <br />
        Crus, cuits, nature ou préparés. Frais, surgelés ou en conserve.
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
