import * as S from './styles'

const Text = ({
  children,
  align = 'left',
  elementStyle = 'normal'
}: S.TextProps) => {
  return (
    <S.Text align={align} elementStyle={elementStyle}>
      {children}
    </S.Text>
  )
}

export default Text
