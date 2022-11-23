import { node } from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const RequiredAuth = ({ children }) => {
  const { authorized } = useAuth()
  const location = useLocation()

  return authorized ? children : <Navigate to="/" state={{ from: location }} replace />
}

RequiredAuth.propTypes = {
  children: node.isRequired
}

export default RequiredAuth
