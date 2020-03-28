import React, {FC} from "react"

import {withPageContainer} from "../../page"
import BigTitle from "../title"

const Page: FC = () => {
  return (
    <BigTitle>
      Les fondements et les contenus clés sur lesquels repose le parcours Cap Bien-être
    </BigTitle>
  )
}

export default withPageContainer(Page)
