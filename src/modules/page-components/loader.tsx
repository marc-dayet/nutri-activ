import React, {FC} from "react"
import {animated, useTransition} from "react-spring"
import cn from "classnames"

import {ReactComponent as LoaderIcon} from "./loader.svg"

import cs from "./loader.module.scss"

type LoaderProps = {
  isVisible: boolean
}

const PageLoader: FC<LoaderProps> = ({isVisible}) => {
  const transitions = useTransition(isVisible, null, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
  })

  return (
    <>
      {transitions.map(
        ({key, item: isVisible, props: style}) =>
          isVisible && (
            <animated.div key={key} className={cn(cs.container)} style={style}>
              <LoaderIcon className={cs.loader} width={100} height={100} />
            </animated.div>
          ),
      )}
    </>
  )
}

export default PageLoader
