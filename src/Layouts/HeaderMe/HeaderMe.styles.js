import styled from 'styled-components'
import Avatar from '../../components/Avatar'
import IconFilter from '../../components/IconFilter'
import Logo from '../../components/Logo'

const HeaderMe = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--height-header-me);
  box-sizing: border-box;
  background-color: var(--color-first-light-black);
  border-bottom: 0.1rem var(--color-thid-black) solid;
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  ${Logo} {
    --size: calc(var(--height-header-me) - 1rem);
    transform: translateY(-.5rem);
  }

  ${IconFilter} {
    height: 70%;
  }

  ${Avatar} {
    height: 90%;
  }

  @media (min-width: 720px) {
    padding: 1rem;
  }
`

export default {
  HeaderMe
}
