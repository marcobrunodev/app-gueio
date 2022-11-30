import { string } from 'prop-types'
import Avatar from '../../components/Avatar'
import Logo from '../../components/Logo'
import S from './HeaderMe.styles'
import IconFilter from '../../components/IconFilter'

const HeaderMe = ({ avatar }) => (
  <S.HeaderMe>
    <Avatar src={avatar} />
    <Logo />
    <IconFilter />
  </S.HeaderMe>
)

HeaderMe.propTypes = {
  avatar: string.isRequred
}

export default HeaderMe
