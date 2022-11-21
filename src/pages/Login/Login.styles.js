import styled from 'styled-components'
import Title from '../../components/Title'

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

const Login = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  ${Title} {
    margin-bottom: 4rem;
  }
`

export default {
  Login,
  Buttons
}
