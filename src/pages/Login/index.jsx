import Login from './Login'
import useLogin from './useLogin'

export default () => {
  const { connectWallet } = useLogin()

  return <Login connectWallet={connectWallet} />
}
