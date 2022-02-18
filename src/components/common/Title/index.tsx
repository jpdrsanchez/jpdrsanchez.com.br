import * as S from './styles'

const Title = ({
  level,
  align = 'left',
  elementStyle = 'large',
  children
}: S.TitleProps) => {
  return (
    <S.Title level={level} align={align} elementStyle={elementStyle}>
      {children}
    </S.Title>
  )
}

export default Title
