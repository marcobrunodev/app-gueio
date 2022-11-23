import Login from './Login'
import useLogin from './useLogin'

export default () => {
  const { connectWallet, generateRandomString } = useLogin()

  return <Login connectWallet={connectWallet} discordState={generateRandomString()} />
}
