import React, {FC} from "react";
import cn from "classnames";

import {ReactComponent as Icon} from "./list-item.svg";
import cs from "./list.module.scss";

type PageListItemProps = {
  className?: string;
  bold?: boolean;
};

const PageListItem: FC<PageListItemProps> = ({children, className, bold = false}) => {
  return (
    <li className={cn(cs.listItem, {[cs.bold]: bold}, className)}>
      <Icon className={cs.icon} />
      {children}
    </li>
  );
};

export default PageListItem;
