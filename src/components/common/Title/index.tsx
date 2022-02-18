import * as S from './styles'

const Title = ({ level, align, style, children }: S.TitleProps) => {
  return (
    <S.Title level={level} align={align} style={style}>
      {children}
    </S.Title>
  )
}

export default Title
