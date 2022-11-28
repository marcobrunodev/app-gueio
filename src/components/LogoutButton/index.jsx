import { useNavigate } from 'react-router-dom'
import { useDisconnect } from 'wagmi'
import auth from '../../services/auth.service'
import LogoutButton from './LogoutButton'

export default () => {
  const { disconnect } = useDisconnect()
  const navigate = useNavigate()

  return <LogoutButton onClick={async () => {
    await auth.revokeDiscorToken()
    disconnect()
    navigate('/login')
  }} />
}
