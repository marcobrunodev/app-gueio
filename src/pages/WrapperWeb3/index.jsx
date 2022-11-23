import useWrapperWeb3 from './useWrapperWeb3'
import WrapperWeb3 from './WrapperWeb3'

export default () => {
  const { wagmiClient, ethereumClient } = useWrapperWeb3()

  return <WrapperWeb3 wagmiClient={wagmiClient} ethereumClient={ethereumClient} />
}
