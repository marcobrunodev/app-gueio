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
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  ${Logo} {
    --size: calc(var(--height-header-me) + 2rem);
  }

  ${IconFilter} {
    height: 70%;
  }

  ${Avatar} {
    height: 90%;
  }
`

export default {
  HeaderMe
}
