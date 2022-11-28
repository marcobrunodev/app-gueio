import styled from 'styled-components'
import Avatar from '../../components/Avatar'
import IconFilter from '../../components/IconFilter'
import Logo from '../../components/Logo'

const HeaderMe = styled.header`
  height: var(--height-header-me);
  border-bottom: 0.1rem var(--color-thid-black) solid;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
