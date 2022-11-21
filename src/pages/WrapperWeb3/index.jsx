import useWrapperWeb3 from './useWrapperWeb3'
import WrapperWeb3 from './WrapperWeb3'

export default () => {
  const { client } = useWrapperWeb3()

  return <WrapperWeb3 client={client} />
}
