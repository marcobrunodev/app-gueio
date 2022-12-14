import { func } from 'prop-types'
import Button from '../Button'

const ButtonConnectWallet = ({ connectWallet }) => (
  <Button onClick={connectWallet}>WalletConnect</Button>
)

ButtonConnectWallet.propTypes = {
  connectWallet: func.isRequired
}

export default ButtonConnectWallet
