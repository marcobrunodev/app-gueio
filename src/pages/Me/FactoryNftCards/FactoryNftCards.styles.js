import styled from 'styled-components'

const FactoryNftCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  
  @media (min-width: 720px) {
    padding: 2rem;
    justify-content: flex-start;
  }
`

export default {
  FactoryNftCards
}
