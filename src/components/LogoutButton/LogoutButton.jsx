import { func } from 'prop-types'
import Button from '../Button'

const LogoutButton = ({ onClick }) => (
  <Button onClick={onClick}>Logout</Button>
)

LogoutButton.propTypes = {
  onClick: func.isRequired
}

export default LogoutButton
