import React, {FC} from "react";
import cn from "classnames";

import cs from "./img.module.scss";

type ImgProps = {
  className?: string;
  title?: string;
  src: string;
  mode: "avatar-md" | "avatar-lg" | "avatar-xl" | "halfscreen" | "almost-fullscreen" | "fullscreen";
};

const Img: FC<ImgProps> = (props) => {
  const {className, src, mode, title} = props;
  return <img className={cn(cs.img, className)} src={src} alt="" title={title} data-mode={mode} />;
};

export default Img;
