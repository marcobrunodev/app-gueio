import { func } from 'prop-types'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import Title from '../../components/Title'
import S from './Login.styles'

const { VITE_DISCORD_OAUTH2_URL } = import.meta.env

const Login = ({ connectWallet }) => (
  <S.Login>
    <Logo center />

    <Title center>Login with:</Title>

    <S.Buttons>
      <Button onClick={connectWallet}>WalletConnect</Button>
      <Button as="a" href={VITE_DISCORD_OAUTH2_URL}>Discord</Button>
      <Button>Twitch</Button>
      <Button>Twitter</Button>
      <Button>Email</Button>
    </S.Buttons>
  </S.Login>
)

Login.propTypes = {
  connectWallet: func.isRequired
}

export default Login
