import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

const useAuth = () => {
  const { address } = useAccount()
  const [authorized, setAuthorized] = useState(!!address)

  useEffect(() => {
    setAuthorized(!!address)
  }, [address])

  return {
    authorized
  }
}

export default useAuth
