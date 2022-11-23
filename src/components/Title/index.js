import styled, { css } from 'styled-components'

const hasCenter = ({ center }) => center && css`
  text-align: center;
`

const Title = styled.h1`
  font-size: 3.2rem;
  font-family: var(--silkscreen);
  font-weight: bold;

  ${hasCenter};
`

export default Title
