import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useAccount } from 'wagmi'
import serviceNft from '../../services/nfts.service'

const useMe = () => {
  const { discordAvatar } = useLoaderData()
  const { address } = useAccount()
  const [nfts, setNfts] = useState([])

  useEffect(() => {
    const getAllNfts = async () => {
      const nftsFromService = await serviceNft.getAll(address)
      setNfts(nftsFromService)

      console.log(nftsFromService)
      console.log(JSON.parse(nftsFromService[0].metadata))
      console.log(JSON.parse(nftsFromService[2].metadata))
    }

    getAllNfts()
  }, [])

  return {
    discordAvatar,
    nfts
  }
}

export default useMe
