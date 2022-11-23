import { func } from 'prop-types'
import Button from '../Button'

const LogoButton = ({ onClick }) => (
  <Button onClick={onClick}>Logout</Button>
)

LogoButton.propTypes = {
  onClick: func.isRequired
}

export default LogoButton
