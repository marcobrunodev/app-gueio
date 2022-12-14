import { string } from 'prop-types'
import Button from '../../components/Button'
import ButtonConnectWallet from '../../components/ButtonConnectWallet'
import Logo from '../../components/Logo'
import Title from '../../components/Title'
import S from './Login.styles'

const { VITE_DISCORD_OAUTH2_URL } = import.meta.env

const Login = ({ discordState }) => (
  <S.Login>
    <Logo center />

    <Title center>Login with:</Title>

    <S.Buttons>
      <ButtonConnectWallet />
      <Button as="a" href={`${VITE_DISCORD_OAUTH2_URL}&state=${discordState}`}>Discord</Button>
    </S.Buttons>
  </S.Login>
)

Login.propTypes = {
  discordState: string.isRequired
}

export default Login
