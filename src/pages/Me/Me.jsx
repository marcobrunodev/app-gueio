import { string } from 'prop-types'
import LogoutButton from '../../components/LogoutButton'
import HeaderMe from '../../Layouts/HeaderMe'
import S from './Me.styles'

const Me = ({ avatar }) => (
  <S.Me>
    <HeaderMe avatar={avatar} />
    <LogoutButton />
  </S.Me>
)

Me.propTypes = {
  avatar: string.isRequired
}

export default Me
