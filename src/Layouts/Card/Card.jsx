import { func, string } from 'prop-types'
import Button from '../../components/Button'
import Description from '../../components/Description'
import S from './Card.styles'

const Card = ({ nft, description, onClick }) => (
  <S.Card>
    <S.Nft src={nft} />

    <Description>{description}</Description>

    <Button onClick={onClick}>Apply to Discord avatar</Button>
  </S.Card>
)

Card.propTypes = {
  nft: string.isRequired,
  description: string.isRequired,
  onClick: func.isRequired
}

export default Card
