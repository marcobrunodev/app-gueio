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
      navigate('/@me')
    }
  }, [isConnected])

  const connectWallet = () => {
    if (!isOpen && !address) {
      open()
    }
  }

  function generateRandomString (length = 33) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
  }

  return {
    connectWallet,
    generateRandomString
  }
}

export default useLogin
