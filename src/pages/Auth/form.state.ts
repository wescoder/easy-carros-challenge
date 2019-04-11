import produce from 'immer'

export type LoginFormAction =
  | { type: 'SET_EMAIL'; email: string }
  | { type: 'SET_PASSWORD'; password: string }
  | { type: 'LOGIN'; email: string; password: string }
  | { type: 'LOGIN_FAILED' }
  | { type: 'LOGIN_SUCCESS' }

export interface LoginFormState {
  email: string
  isFormValid: boolean
  isLoggingIn: boolean
  password: string
}

export const loginFormInitialState: LoginFormState = {
  email: '',
  isFormValid: false,
  isLoggingIn: false,
  password: '',
}

const isValidForm = (state: LoginFormState): boolean => {
  return !!(state.email && state.password)
}

export const loginFormReducer = produce<LoginFormState, [LoginFormAction]>(
  (state, action): LoginFormState => {
    switch (action.type) {
      case 'SET_EMAIL': {
        state.email = action.email
        state.isFormValid = isValidForm(state)
        return
      }

      case 'SET_PASSWORD': {
        state.password = action.password
        state.isFormValid = isValidForm(state)
        return
      }

      case 'LOGIN': {
        state.isLoggingIn = true
        return
      }

      case 'LOGIN_FAILED': {
        state.isLoggingIn = false
        state.password = ''
        return
      }

      case 'LOGIN_SUCCESS': {
        return loginFormInitialState
      }
    }
  },
)
