import produce from 'immer'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

interface FormInput {
  initialValue?: string
  isPristine?: boolean
  isValid?: boolean
  required?: boolean
  validate?: (value: string) => boolean
  value?: string
}
interface FormInputs {
  [key: string]: FormInput
}

interface UseForm {
  handleChanges: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  inputs: FormInputs
  isFormValid: boolean
}

const defaultFormValidation = (inputs: FormInputs): boolean =>
  Object.values(inputs).reduce(
    (prev, input): boolean => prev && input.isValid,
    true,
  )

export function useForm({
  inputs: initialInputs,
  submit: submitCallback,
  validate: validateForm = defaultFormValidation,
}: {
  inputs: FormInputs
  submit: (inputs: { [key: string]: string }) => any
  validate?: (inputs: FormInputs) => boolean
}): UseForm {
  const [inputs, setInputs] = useState<FormInputs>(initialInputs)
  const [isFormValid, setFormValid] = useState<boolean>(false)

  useEffect(() => {
    setInputs(
      produce(
        inputs,
        (draft): void => {
          Object.values(draft).forEach(
            (input): void => {
              input.isPristine = true
            },
          )
        },
      ),
    )
  }, [inputs])

  return {
    handleChanges(event: ChangeEvent<HTMLInputElement>): void {
      event.preventDefault()

      const newInputs = produce(
        inputs,
        (draft): void => {
          const input = draft[event.target.name]
          input.value = event.target.value
          input.isValid = input.validate(event.target.value)
        },
      )

      setInputs(newInputs)

      setFormValid(
        produce(isFormValid, (_draft): boolean => validateForm(newInputs)),
      )
    },
    handleSubmit(e: FormEvent<HTMLFormElement>): any {
      e.preventDefault()
      if (isFormValid) {
        submitCallback(
          Object.keys(inputs).reduce(
            (all, i): { [key: string]: string } => ({
              ...all,
              [i]: inputs[i].value,
            }),
            {},
          ),
        )
      }
    },
    inputs,
    isFormValid,
  }
}
