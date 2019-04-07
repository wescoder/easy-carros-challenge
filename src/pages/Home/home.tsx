/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { Fragment as F, ReactElement } from 'react'

export interface HomeProps {
  color?: string
  name?: string
}

const titleCss = (color: string): SerializedStyles => css({ color })

export function Home({ color, name }: HomeProps): ReactElement<HomeProps> {
  return (
    <F>
      <h1 css={titleCss(color)}>Hello, {name}!</h1>
    </F>
  )
}

Home.defaultProps = {
  color: 'darkorchid',
  name: 'world',
}

export default Home
