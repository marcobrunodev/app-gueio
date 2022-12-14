const axios = require('axios')

const { API_KEY_MORALIS } = process.env

const ipfsToHttps = (url) => /^ipfs:\/\//.test(url) ? `https://ipfs.io/ipfs/${url.replace(/^ipfs:\/\//, '')}` : url

module.exports = async (context, req) => {
  try {
    context.log('API_KEY_MORALIS', API_KEY_MORALIS)
    const { address } = context.bindingData
    context.log('address', address)
    const options = {
      method: 'GET',
      url: `https://deep-index.moralis.io/api/v2/${address}/nft`,
      params: { chain: 'eth', format: 'decimal', normalizeMetadata: 'false' },
      headers: { accept: 'application/json', 'X-API-Key': API_KEY_MORALIS }
    }
    const { data: { result } } = await axios.request(options)
    const nfts = []
    result.forEach(({ name, metadata, token_id: tokenId, token_address: tokenAddress }) => {
      if (!name || !metadata || !tokenId || !tokenAddress) return

      const { image, description } = JSON.parse(metadata)

      nfts.push({
        name,
        description,
        image: ipfsToHttps(image),
        tokenId,
        tokenAddress
      })
    })

    return {
      status: 200,
      body: {
        status: 200,
        address,
        nfts
      }
    }
  } catch (error) {
    context.log('Error: GetNfts', error.message)

    return {
      status: 500,
      body: {
        status: 500,
        message: 'Error: GetNfts'
      }
    }
  }
}
