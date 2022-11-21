import { bool, func } from 'prop-types'
import ButtonFactory from './ButtonFactory/index.jsx'
import S from './ConnectWalletMenu.styles'

const ConnectWalletMenu = ({ active, close }) => (
  <S.ConnectWalletMenu active={active} onClick={close}>
    <ButtonFactory />
  </S.ConnectWalletMenu>
)

ConnectWalletMenu.propTypes = {
  active: bool.isRequired,
  close: func.isRequired
}

export default ConnectWalletMenu
