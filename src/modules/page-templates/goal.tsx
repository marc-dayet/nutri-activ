import React, {FC} from "react";
import {useObservable} from "@soywod/react-use-observable";

import PageContainer from "../page";
import {currStep$} from "../context";
import {Subtitle, List, ListItem} from "../page-components";
import chrono from "./goal.png";

import cs from "./goal.module.scss";

type GoalProps = {
  goals: string[];
  content: string[];
  intersessionWork: string;
};

const Goal: FC<GoalProps> = props => {
  const [{module}] = useObservable(currStep$, currStep$.value);
  const {goals, content, intersessionWork} = props;

  return (
    <PageContainer>
      <Subtitle className={cs.subtitle}>Objectifs de l'étape {module}</Subtitle>
      <List className={cs.goalList}>
        {goals.map(goal => (
          <ListItem key={goal} className={cs.goalListItem}>
            {goal}
          </ListItem>
        ))}
      </List>
      <div className={cs.subtitleWithImage}>
        <Subtitle className={cs.subtitle}>
          <img className={cs.chrono} src={chrono} alt="" />
          Contenu de l'étape {module}
        </Subtitle>
      </div>
      <div className={cs.grid}>
        <ol className={cs.contentList}>
          {content.map(content => (
            <li key={content} className={cs.contentListItem}>
              {content}
            </li>
          ))}
        </ol>
        <img className={cs.intersessionWork} src={intersessionWork} alt="Travail intersession" />
      </div>
    </PageContainer>
  );
};

export default Goal;
