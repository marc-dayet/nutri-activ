import React, {FC} from "react";
import YouTubeVideo from "react-youtube";

import PageContainer from "../page";
import {Title} from "../page-components";

import cs from "./video.module.scss";

type PageVideoProps = {
  id: string;
  title: string;
  imgs: [string, string, string, string, string, string];
};

const PageVideo: FC<PageVideoProps> = (props) => {
  const {id, title, imgs} = props;

  return (
    <PageContainer>
      <Title>{title}</Title>
      <div className={cs.frame}>
        <YouTubeVideo
          containerClassName={cs.container}
          className={cs.video}
          videoId={id}
          opts={{playerVars: {autoplay: 1}}}
        />
        {imgs.map((img, idx) => (
          <img key={img} className={cs[`img${idx + 1}`]} src={img} alt="" />
        ))}
      </div>
    </PageContainer>
  );
};

export default PageVideo;
