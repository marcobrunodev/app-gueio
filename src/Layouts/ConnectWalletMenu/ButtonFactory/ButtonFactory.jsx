import S from '../ConnectWalletMenu.styles'
import { arrayOf, func, object } from 'prop-types'
import Button from '../../../components/Button'

const ButtonFactory = ({ connectors, connect }) => (
  <S.Buttons>
    {connectors.map((connector) => (
      <Button
        key={connector.id}
        disabled={!connector.ready}
        onClick={() => connect({ connector })} >
          {connector.name}
      </Button>
    ))}
  </S.Buttons>
)

ButtonFactory.propTypes = {
  connectors: arrayOf(object).isRequired,
  connect: func.isRequired
}

export default ButtonFactory
