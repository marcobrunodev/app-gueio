import styled from 'styled-components'
import { Button } from '../../components/Button/Button.styles'
import Description from '../../components/Description'

const Nft = styled.img``

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: .1rem solid var(--color-first-white);
  padding-bottom: 1rem;

  & > ${Description} {
    padding: .5rem .5rem 1rem;
  }

  & > ${Button} {
    font-size: 1.2rem;
  }
`

export default {
  Card,
  Nft
}
