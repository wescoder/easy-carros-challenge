import { AuthContext, DefaultAuthContext } from '@ec/pages/Auth'
import NotFound from '@ec/pages/NotFound'
import { routes } from '@ec/pages/routes'
import { useRoutes } from 'hookrouter'
import * as React from 'react'
import { ReactElement } from 'react'

export const App: () => ReactElement<{}> = (): ReactElement<{}> => (
  <AuthContext.Provider value={DefaultAuthContext}>
    {useRoutes(routes) || <NotFound />}
  </AuthContext.Provider>
)

export default App
