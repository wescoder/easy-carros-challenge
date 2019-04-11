import { navigate } from 'hookrouter'
import { createContext, useContext } from 'react'

export interface AuthType {
  isLoggedIn: boolean
}

export const DefaultAuthContext: AuthType = {
  isLoggedIn: false,
}

export const AuthContext = createContext<AuthType>(DefaultAuthContext)

export function useAuth(): boolean {
  const { isLoggedIn } = useContext(AuthContext)

  if (!isLoggedIn) {
    navigate('/login', true)
  }

  return isLoggedIn
}

export function useNotAuth(url: string): boolean {
  const { isLoggedIn } = useContext(AuthContext)

  if (isLoggedIn) {
    navigate(url, true)
  }

  return isLoggedIn
}
