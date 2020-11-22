import React, {FC} from "react";
import cn from "classnames";

import cs from "./grid.module.scss";

type GridProps = {
  className?: string;
  direction?: "vertical" | "horizontal";
  position?: "center center" | "left center" | "left top";
  padder?: boolean;
};

const Grid: FC<GridProps> = props => {
  const {className, direction = "horizontal", position = "center center", padder, children} = props;

  return (
    <div
      className={cn(cs.grid, className, {[cs.padder]: padder})}
      data-direction={direction}
      data-position={position}
    >
      {children}
    </div>
  );
};

export default Grid;
