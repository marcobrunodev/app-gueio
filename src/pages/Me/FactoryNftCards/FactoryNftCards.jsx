import { arrayOf, shape, string } from 'prop-types'
import Card from '../../../Layouts/Card'

const FactoryNftCards = ({ nfts }) => (
  <>
    {nfts.map(({ tokenId, image, tokenAddress, description }) => (
      <Card
        key={tokenId + tokenAddress}
        src={image}
        tokenId={tokenId}
        tokenAddress={tokenAddress}
        description={description}
      />)
    )}
  </>
)

FactoryNftCards.propTypes = {
  nfts: arrayOf(shape({
    tokenId: string.isRequired,
    image: string.isRequired,
    tokenAddress: string.isRequired,
    description: string.isRequired
  })).isRequired
}

export default FactoryNftCards
