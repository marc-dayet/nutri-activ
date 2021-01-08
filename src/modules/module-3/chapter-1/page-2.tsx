import React, {FC} from "react";

import {Video} from "../../page-templates";
import img1 from "./page-2-1.png";
import img2 from "./page-2-2.png";
import img3 from "./page-2-3.png";
import img4 from "./page-2-4.png";
import img5 from "./page-2-5.png";
import img6 from "./page-2-6.png";

const Page: FC = () => {
  return (
    <Video
      id="F5J6SRbaDh8"
      title="Vidéo d'introduction"
      imgs={[img1, img2, img3, img4, img5, img6]}
    />
  );
};

export default Page;
