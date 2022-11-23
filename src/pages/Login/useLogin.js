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

  function generateRandomString () {
    let randomString = ''
    const randomNumber = Math.floor(Math.random() * 10)

    for (let i = 0; i < 20 + randomNumber; i++) {
      randomString += String.fromCharCode(33 + Math.floor(Math.random() * 94))
    }

    return randomString
  }

  return {
    connectWallet,
    generateRandomString
  }
}

export default useLogin
