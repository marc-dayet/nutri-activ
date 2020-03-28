import React, {FC} from "react"

import {withPageContainer} from "../../page"
import BigTitle from "../title"

const Page: FC = () => {
  return <BigTitle>Présentation de la formation distancielle Cap Bien-être</BigTitle>
}

export default withPageContainer(Page)
