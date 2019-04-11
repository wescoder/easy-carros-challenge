import * as React from 'react'
import { Fragment as F, ReactElement } from 'react'

export function NotFound(): ReactElement<{}> {
  return (
    <F>
      <h1>Page not found. :&apos;(</h1>
      <button onClick={() => window.history.back()}>&lt;</button>
    </F>
  )
}

export default NotFound
