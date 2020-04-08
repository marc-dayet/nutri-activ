import React, {FC, useEffect, useState} from "react"
import {useBehaviorSubject} from "react-captain"

import AuthGuard from "./auth/guard"
import {steps, encodeStep, decodeStep, currStep$} from "./modules/context"
import PageContainer from "./modules/page"
import Nav from "./nav"
import Main from "./main"

const App: FC = () => {
  const [step] = useBehaviorSubject(currStep$)
  const [components, setComponents] = useState<{[key: string]: FC}>({})
  const CurrPage = components[encodeStep(step)] || (() => null)

  useEffect(() => {
    setComponents(
      steps.keys.reduce((components, key) => {
        const {module, chapter, page} = decodeStep(key)

        return {
          ...components,
          [key]: React.lazy(async () => {
            const [importedModule] = await Promise.all([
              import(`./modules/module-${module}/chapter-${chapter}/page-${page}.tsx`),
              new Promise<void>(resolve => setTimeout(resolve, 300)),
            ])
            return importedModule
          }),
        }
      }, {}),
    )
  }, [])

  return (
    <AuthGuard>
      <Nav />
      <Main>
        <PageContainer>
          <CurrPage />
        </PageContainer>
      </Main>
    </AuthGuard>
  )
}

export default App
