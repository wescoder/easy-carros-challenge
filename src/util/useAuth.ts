import { AuthContext } from '@ec/pages/Auth'
import { navigate } from 'hookrouter'
import { useContext } from 'react'

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
