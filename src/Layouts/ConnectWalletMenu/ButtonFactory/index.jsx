import { useConnect } from 'wagmi'
import ButtonFactory from './ButtonFactory'

export default () => {
  const { connectors, connect } = useConnect()

  return <ButtonFactory connect={connect} connectors={connectors} />
}
