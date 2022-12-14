import ButtonConnectWallet from './ButtonConnectWallet'
import useButtonConnectWallet from './useButtonConnectWallet'

export default () => {
  const { connectWallet } = useButtonConnectWallet()

  return <ButtonConnectWallet connectWallet={connectWallet} />
}
