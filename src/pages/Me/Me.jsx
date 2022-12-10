import { string } from 'prop-types'
import LogoutButton from '../../components/LogoutButton'
import HeaderMe from '../../layouts/HeaderMe'
import Card from '../../layouts/Card'
import S from './Me.styles'

const Me = ({ avatar }) => (
  <S.Me>
    <HeaderMe avatar={avatar} />

    <Card
      smartContract="0x56a67d475ded20f1120d6377988ae12992888ac4"
      cid="1"
    />

    <Card
      smartContract="0x56a67d475ded20f1120d6377988ae12992888ac4"
      cid="1"
    />

    <LogoutButton />
  </S.Me>
)

Me.propTypes = {
  avatar: string.isRequired
}

export default Me
