import React, {FC} from "react";
import YouTubeVideo from "react-youtube";

import PageContainer from "../page";
import {Title} from "../page-components";

import cs from "./video.module.scss";

type PageVideoProps = {
  id: string;
};

const PageVideo: FC<PageVideoProps> = props => {
  const {id} = props;

  return (
    <PageContainer>
      <Title>Vidéo d'introduction</Title>
      <YouTubeVideo
        containerClassName={cs.container}
        className={cs.video}
        videoId={id}
        opts={{playerVars: {autoplay: 1}}}
      />
    </PageContainer>
  );
};

export default PageVideo;
