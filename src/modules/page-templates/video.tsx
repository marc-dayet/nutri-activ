import React, {FC} from "react";
import YouTubeVideo from "react-youtube";

import PageContainer from "../page";
import {Title} from "../page-components";
import img1 from "./video-1.png";
import img2 from "./video-2.png";
import img3 from "./video-3.png";
import img4 from "./video-4.png";
import img5 from "./video-5.png";
import img6 from "./video-6.png";

import cs from "./video.module.scss";

type PageVideoProps = {
  id: string;
};

const PageVideo: FC<PageVideoProps> = props => {
  const {id} = props;

  return (
    <PageContainer>
      <Title>Vidéo d'introduction</Title>
      <div className={cs.frame}>
        <YouTubeVideo
          containerClassName={cs.container}
          className={cs.video}
          videoId={id}
          opts={{playerVars: {autoplay: 1}}}
        />
        <img className={cs.img1} src={img1} alt="" />
        <img className={cs.img2} src={img2} alt="" />
        <img className={cs.img3} src={img3} alt="" />
        <img className={cs.img4} src={img4} alt="" />
        <img className={cs.img5} src={img5} alt="" />
        <img className={cs.img6} src={img6} alt="" />
      </div>
    </PageContainer>
  );
};

export default PageVideo;
