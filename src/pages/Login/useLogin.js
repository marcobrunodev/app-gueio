import { useWeb3Modal } from '@web3modal/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

const useLogin = () => {
  const { isOpen, open } = useWeb3Modal()
  const { address, isConnected } = useAccount()
  const navigate = useNavigate()

  useEffect(() => {
    if (isConnected) {
      navigate('/dashboard')
    }
  }, [address])

  const connectWallet = () => {
    if (!isOpen && !address) {
      open()
    }
  }

  return {
    connectWallet
  }
}

export default useLogin
