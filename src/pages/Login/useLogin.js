import { useState } from 'react'

const useLogin = () => {
  const [statusConnectWalletMenu, setStatusConnectWalletMenu] = useState(false)

  const toggleConnectWalletMenu = () => {
    setStatusConnectWalletMenu(!statusConnectWalletMenu)
  }

  return {
    toggleConnectWalletMenu,
    statusConnectWalletMenu
  }
}

export default useLogin
