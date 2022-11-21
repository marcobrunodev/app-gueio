import Login from './Login'
import useLogin from './useLogin'

export default () => {
  const { statusConnectWalletMenu, toggleConnectWalletMenu } = useLogin()

  return <Login
            statusConnectWalletMenu={statusConnectWalletMenu}
            toggleConnectWalletMenu={toggleConnectWalletMenu} />
}
