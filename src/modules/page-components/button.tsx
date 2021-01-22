import React, {FC} from "react";

import {ReactComponent as ButtonBackgroundLeft} from "./button-left.svg";
import {ReactComponent as ButtonBackgroundRight} from "./button-right.svg";

import {useCurrStep, isLastStep} from "../context";
import cs from "./button.module.scss";

export type PageButtonProps = {
  onClick: Function;
  disabled?: boolean;
};

export const PageButtonLeft: FC<PageButtonProps> = (props) => {
  const {onClick: handleClick, disabled = false} = props;

  return (
    <button className={cs.buttonLeft} onClick={() => handleClick()} disabled={disabled}>
      <span className={cs.label}>Précédent</span>
      <ButtonBackgroundLeft className={cs.background} />
    </button>
  );
};

export const PageButtonRight: FC<PageButtonProps> = (props) => {
  const {onClick: handleClick, disabled = false} = props;
  const [currStep] = useCurrStep();

  if (isLastStep(currStep)) {
    return null;
  }

  return (
    <button className={cs.buttonRight} onClick={() => handleClick()} disabled={disabled}>
      <span className={cs.label}>Suivant</span>
      <ButtonBackgroundRight className={cs.background} />
    </button>
  );
};
