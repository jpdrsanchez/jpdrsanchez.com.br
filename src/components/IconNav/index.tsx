import { ReactNode } from 'react'

import * as S from './style'

type IconNavProps = {
  children: ReactNode
}

const IconNav = ({ children }: IconNavProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default IconNav
