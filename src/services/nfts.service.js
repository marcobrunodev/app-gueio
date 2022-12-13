const nfts = {
  getAll: async (address) => {
    const url = `/api/nfts/${address}`
    const response = await fetch(url)
    const { nfts } = await response.json()

    return nfts
  }
}

export default nfts
