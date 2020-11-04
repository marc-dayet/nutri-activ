import React, {FC} from "react";
import {useObservable} from "@soywod/react-use-observable";
import cn from "classnames";

import {theme$} from "../../../theme";
import PageContainer from "../../page";
import {Title, Paragraph} from "../../page-components";
import img from "./page-4-1.png";

import cs from "./page-4.module.scss";

const Page: FC = () => {
  const [theme] = useObservable(theme$, theme$.value);

  return (
    <PageContainer>
      <Title>Formation distancielle</Title>
      <Paragraph className={cs.paragraph}>
        Prérequis obligatoire pour participer à la formation en présentiel, la formation en
        distanciel permet de maîtriser les savoirs, connaissances, principes, messages clés sur
        lesquels vous pourrez vous baser pour animer <br />
        Cap Bien-Être.
      </Paragraph>
      <Paragraph className={cn(cs.paragraphAlt, theme.secondary)}>
        Vous avez à votre disposition 2 outils pour la formation à distance :
      </Paragraph>
      <Paragraph>
        <img className={cs.img} src={img} alt="" />
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
