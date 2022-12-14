import { createGlobalStyle } from 'styled-components'

const Sizes = createGlobalStyle`
  :root {
    --font-size: 10px;

    --height-header-me: 5rem;

    @media (min-width: 720px) {
      --height-header-me: 6rem;
    }
  }
`

export default Sizes
