import { useDisconnect } from 'wagmi'
import LogoButton from './LogoutButton'

export default () => {
  const { disconnect } = useDisconnect()

  return <LogoButton onClick={disconnect} />
}
