/** @jsx jsx */
import { useForm } from '@ec/util/useForm'
import { css, jsx, SerializedStyles } from '@emotion/core'
import { Fragment as F, ReactElement, useState } from 'react'

const { API_URL } = process.env

const invalidInputCss: SerializedStyles = css({
  color: 'red',
  borderColor: 'red',
})

const authFormInputs = {
  email: {
    required: true,
    validate(value: string): boolean {
      return !!value
    },
  },
  password: {
    required: true,
    validate(value: string): boolean {
      return !!value
    },
  },
}

export function Auth(): ReactElement<{}> {
  const [isLoggingIn, setLoggingIn] = useState(false)
  const { inputs, isFormValid, handleChanges, handleSubmit } = useForm({
    inputs: authFormInputs,
    submit: async (state): Promise<void> => {
      setLoggingIn(true)
      console.log(state)
      const loginResponse = await fetch(`${API_URL}/auth`)
      setLoggingIn(false)
    },
  })

  return (
    <F>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>E-mail:</label>
        <input
          css={
            !inputs.email.isPristine && !inputs.email.isValid && invalidInputCss
          }
          name='email'
          onChange={handleChanges}
          placeholder='Ditige seu e-mail'
          type='email'
          value={inputs.email.value}
        />
        <label htmlFor='password'>Senha:</label>
        <input
          css={
            !inputs.password.isPristine &&
            !inputs.password.isValid &&
            invalidInputCss
          }
          name='password'
          onChange={handleChanges}
          placeholder='Digite sua senha'
          type='password'
          value={inputs.password.value}
        />
        <button type='submit' disabled={!isFormValid || isLoggingIn}>
          Entrar
        </button>
      </form>
    </F>
  )
}

export default Auth
