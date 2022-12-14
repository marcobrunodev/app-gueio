import { string } from 'prop-types'
import Avatar from '../../components/Avatar'
import Logo from '../../components/Logo'
import S from './HeaderMe.styles'

const HeaderMe = ({ avatar }) => (
  <S.HeaderMe>
    <Logo />
    <Avatar src={avatar} />
  </S.HeaderMe>
)

HeaderMe.propTypes = {
  avatar: string.isRequred
}

export default HeaderMe
