import { func, string } from 'prop-types'
import Button from '../../components/Button'
import Description from '../../components/Description'
import S from './Card.styles'

const Card = ({ tokenId, src, tokenAddress, description, onClick }) => (
  <S.Card>
    <S.Nft src={src} />

    <Description>{description}</Description>

    <Button onClick={() => onClick({ tokenId, tokenAddress })}>Apply to Discord avatar</Button>
  </S.Card>
)

Card.propTypes = {
  tokenId: string.isRequired,
  src: string.isRequired,
  tokenAddress: string.isRequired,
  description: string.isRequire,
  onClick: func.isRequired
}

export default Card
