import { ChangeEvent } from 'react'

export const inputChangeCb = (
  cb: (...args: any[]) => any,
): ((e: ChangeEvent<HTMLInputElement>) => any) => (e): any => {
  e.preventDefault()
  cb(e.target.value)
}
