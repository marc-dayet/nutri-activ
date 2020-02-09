import React, {FC, forwardRef} from "react"

import classes from "./loader.module.scss"

type LoaderProps = {
  ref?: React.RefObject<HTMLDivElement>
}

const Loader: FC<LoaderProps> = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes.loader}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
})

export default Loader
