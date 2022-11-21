import styled, { css } from 'styled-components'

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  background-color: var(--color-first-black);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 2px solid var(--color-first);
  transform: translateY(100%);
  transition: transform 100ms ease-in-out;
`

const hasActive = ({ active }) => active && css`
  transform: translateY(0);

  &::before {
    opacity: 1;
    transition: opacity 100ms ease-in-out;
  }

  & ${Buttons} {
    transform: translateY(0);
    transition: transform 200ms 150ms ease-in-out;
  }
`

const ConnectWalletMenu = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  transform: translateY(100%);
  width: 100vw;
  height: 100vh;
  transition: transform 0ms 200ms ease-in-out;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--color-first-light-black);
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 100ms 100ms ease-in-out;
  }

  ${hasActive};
`

export default {
  ConnectWalletMenu,
  Buttons
}
