import { arrayOf, shape, string } from 'prop-types'
import ButtonConnectWallet from '../../components/ButtonConnectWallet'
import LogoutButton from '../../components/LogoutButton'
import HeaderMe from '../../Layouts/HeaderMe'
import FactoryNftCards from './FactoryNftCards'
import S from './Me.styles'

const Me = ({ avatar, nfts }) => (
  <S.Me>
    <HeaderMe avatar={avatar} />

    {nfts ? <FactoryNftCards nfts={nfts} /> : <ButtonConnectWallet />}

    <LogoutButton />
  </S.Me>
)

Me.propTypes = {
  avatar: string.isRequired,
  nfts: arrayOf(shape({
    cid: string.isRequired,
    src: string.isRequired,
    smartContract: string.isRequired
  }))
}

export default Me
