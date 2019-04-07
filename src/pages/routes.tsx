import * as React from 'react'
import { ReactElement } from 'react'
import { Home } from './Home'

export const routes = {
  '/': (): ReactElement<{}> => <Home />,
}
