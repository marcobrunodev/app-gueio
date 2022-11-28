import styled, { css, keyframes } from 'styled-components'
import logo from '../../assets/images/sprite-gueio.png'

const run = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: calc(var(--size) * -36) 0;
  }
`

const hasCenter = ({ center }) => center && css`
  margin-left: auto;
  margin-right: auto;
`

const Logo = styled.figure`
  --size: 20rem;

  width: var(--size);
  height: var(--size);
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: auto var(--size);
  image-rendering: pixelated;
  cursor: pointer;
  animation: ${run} 2.8s steps(36) paused infinite;
  cursor: var(--cursor-pointer);

  &:hover {
    animation-play-state: running;
  }

  ${hasCenter};
`

export default Logo
