import { func, bool } from 'prop-types'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import Title from '../../components/Title'
import ConnectWalletMenu from '../../Layouts/ConnectWalletMenu'
import S from './Login.styles'

const Login = ({ statusConnectWalletMenu, toggleConnectWalletMenu }) => (
  <S.Login>
    <Logo center />

    <Title center>Login with:</Title>

    <S.Buttons>
      <Button onClick={toggleConnectWalletMenu}>Connect Wallet</Button>
      <Button>Discord</Button>
      <Button>Twitch</Button>
      <Button>Email</Button>
    </S.Buttons>

    <ConnectWalletMenu
      close={toggleConnectWalletMenu}
      active={statusConnectWalletMenu} />
  </S.Login>
)

Login.propTypes = {
  statusConnectWalletMenu: bool.isRequired,
  toggleConnectWalletMenu: func.isRequired
}

export default Login
