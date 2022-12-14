import styled from 'styled-components'
import { Button } from '../../components/Button/Button.styles'
import Description from '../../components/Description'

const Nft = styled.img`
  width: 100%;
`

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: .1rem solid var(--color-first-white);
  padding-bottom: 1rem;
  max-width: 32rem;

  & > ${Description} {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 5.5em;
    overflow: hidden;
    padding: .8rem 1rem 0rem;
    margin-bottom: 1rem;
    
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 4em;
      background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, var(--color-first-black) 100%);
      bottom: 0;
      left: 0;
    }
  }

  & > ${Button} {
    font-size: 1.2rem;
  }

  @media (min-width: 321px) {
    border: 0.1rem solid var(--color-first-white);
    background-color: var(--color-first-black);
  }
`

export default {
  Card,
  Nft
}
