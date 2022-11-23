import { configureChains, defaultChains, createClient, chain } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { EthereumClient, modalConnectors } from '@web3modal/ethereum'

const { VITE_INFURA_API_KEY, VITE_CHAIN } = import.meta.env

const useWrapperWeb3 = () => {
  const { provider, webSocketProvider } = configureChains(defaultChains, [infuraProvider({ apiKey: VITE_INFURA_API_KEY }), publicProvider()])
  const chains = [chain[VITE_CHAIN]]

  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: 'web3modal', chains }),
    provider,
    webSocketProvider
  })

  const ethereumClient = new EthereumClient(wagmiClient, chains)

  return {
    wagmiClient,
    ethereumClient
  }
}

export default useWrapperWeb3
