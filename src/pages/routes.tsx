import { useAuth, useNotAuth } from '@ec/util/useAuth'
import * as React from 'react'
import { ReactElement } from 'react'
import Auth from './Auth'
import { Home } from './Home'

export const HomeRoute = (): ReactElement<{}> => {
  useAuth()
  return <Home />
}

export const LoginRoute = (): ReactElement<{}> => {
  useNotAuth('/')
  return <Auth />
}

export const routes = {
  '/': HomeRoute,
  '/login': LoginRoute,
}
