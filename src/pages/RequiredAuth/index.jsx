import { node } from 'prop-types'
import { Navigate, useLoaderData, useLocation } from 'react-router-dom'
import { useAccount } from 'wagmi'

const RequiredAuth = ({ children }) => {
  const { isConnected } = useAccount()
  const discord = useLoaderData()
  const location = useLocation()

  return isConnected || discord.authorized ? children : <Navigate to="/" state={{ from: location }} replace />
}

RequiredAuth.propTypes = {
  children: node.isRequired
}

export default RequiredAuth
