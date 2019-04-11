/** @jsx jsx */
import {
  loginFormInitialState,
  loginFormReducer,
} from '@ec/pages/Auth/form.state'
import { inputChangeCb } from '@ec/util/eventCallback'
import { jsx } from '@emotion/core'
import {
  createContext,
  FormEvent,
  Fragment as F,
  ReactElement,
  useReducer,
} from 'react'

export interface AuthType {
  isLoggedIn: boolean
}

export const DefaultAuthContext: AuthType = {
  isLoggedIn: false,
}

export const AuthContext = createContext<AuthType>(DefaultAuthContext)

export function Auth(): ReactElement<{}> {
  const [{ email, password, isFormValid, isLoggingIn }, dispatch] = useReducer(
    loginFormReducer,
    loginFormInitialState,
  )

  const submit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch({ email, password, type: 'LOGIN' })
    console.log({ validForm: isFormValid })
  }

  return (
    <F>
      <form onSubmit={submit}>
        <label htmlFor='email'>E-mail:</label>
        <input
          name='email'
          type='email'
          placeholder='Ditige seu e-mail'
          value={email}
          onChange={inputChangeCb(
            (value: string): any =>
              dispatch({
                email: value,
                type: 'SET_EMAIL',
              }),
          )}
        />
        <label htmlFor='password'>Senha:</label>
        <input
          name='password'
          type='password'
          placeholder='Digite sua senha'
          value={password}
          onChange={inputChangeCb(
            (value: string): any =>
              dispatch({
                password: value,
                type: 'SET_PASSWORD',
              }),
          )}
        />
        <button type='submit' disabled={isLoggingIn || !isFormValid}>
          Entrar
        </button>
      </form>
    </F>
  )
}

export default Auth
