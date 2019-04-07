import NotFound from '@ec/pages/NotFound'
import { routes } from '@ec/pages/routes'
import { useRoutes } from 'hookrouter'
import * as React from 'react'
import { ReactElement } from 'react'

export const App: () => ReactElement<{}> = () => useRoutes(routes) || <NotFound />

export default App
