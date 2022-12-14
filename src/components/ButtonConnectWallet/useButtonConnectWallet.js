import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'

const useButtonConnectWallet = () => {
  const { isOpen, open } = useWeb3Modal()
  const { address } = useAccount()

  const connectWallet = () => {
    if (!isOpen && !address) {
      open()
    }
  }

  return {
    connectWallet
  }
}

export default useButtonConnectWallet
