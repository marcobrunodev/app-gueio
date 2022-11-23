import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
  :root {
    font-size: var(--font-size);
  }

  html, body {
    cursor: var(--cursor-auto);
  }

  body {
    font-family: var(--pressStart);
    background-color: var(--color-second-black);
    color: var(--color-first-white)
  }
`

export default Base
