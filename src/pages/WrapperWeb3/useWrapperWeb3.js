import { configureChains, defaultChains, createClient } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

const { INFURA_API_KEY } = import.meta.env

const useWrapperWeb3 = () => {
  const { chains, provider, webSocketProvider } = configureChains(defaultChains, [infuraProvider({ apiKey: INFURA_API_KEY }), publicProvider()])

  const client = createClient({
    autoConnect: true,
    connectors: [new MetaMaskConnector(chains)],
    provider,
    webSocketProvider
  })

  return {
    client
  }
}

export default useWrapperWeb3
