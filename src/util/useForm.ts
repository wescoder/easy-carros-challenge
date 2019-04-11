import {
  loginFormInitialState,
  loginFormReducer,
} from '@ec/pages/Auth/form.state'
import { FormEvent, useReducer } from 'react'

export function useForm(): any {
  const [{ email, password, isFormValid, isLoggingIn }, dispatch] = useReducer(
    loginFormReducer,
    loginFormInitialState,
  )

  const submit = (e: FormEvent<HTMLFormElement>): any => {
    e.preventDefault()
    dispatch({
      email,
      password,
      type: 'LOGIN',
    })
    console.log({ validForm: isFormValid })
  }

  return { email, isFormValid, isLoggingIn, password, submit }
}
