import { string } from 'prop-types'
import S from './Button.styles'

const Button = (props) => (
  <S.Button {...props}>
    <S.Content>{props.children}</S.Content>
  </S.Button>
)

Button.propTypes = {
  children: string.isRequired
}

export default Button
