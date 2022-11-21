import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: var(--color-first);
  transition: transform 0.2s ease-in-out;
  position: relative;
  z-index: 2;
`

const Button = styled.button`
  position: relative;
  width: calc(100% - 2rem);
  height: 4.5rem;
  font-size: 1.6rem;
  color: var(--color-first-white);
  cursor: var(--cursor-pointer);
  background-color: transparent;

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: var(--color-first-white);
    width: 100%;
    height: 100%;
    transform: translate(-4px, -4px);
  }

  &:hover {
    & > ${Content} {
      transform: translate(-4px, -4px);
    }
  }
`

export default {
  Button,
  Content
}
