import Avatar from '../../components/Avatar'
import Logo from '../../components/Logo'
import S from './HeaderMe.styles'
import avatar from '../../assets/images/avatar.png'
import IconFilter from '../../components/IconFilter'

const HeaderMe = () => (
  <S.HeaderMe>
    <Avatar src={avatar} />
    <Logo />
    <IconFilter />
  </S.HeaderMe>
)

export default HeaderMe
