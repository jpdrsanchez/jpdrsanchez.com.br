import { ReactNode } from 'react'

import * as S from './styles'

type ButtonProps = {
  type?: 'button' | 'link'
  href?: string
  blank?: boolean
  children: ReactNode
}

const Button = ({
  type = 'button',
  href = '/',
  blank,
  children
}: ButtonProps) => {
  const extraLinkProps = blank ? { target: '_blank', rel: 'noreferrer' } : {}

  if (type === 'button') return <S.Button type="button">{children}</S.Button>

  return (
    <S.Button as="a" href={href} {...extraLinkProps}>
      {children}
    </S.Button>
  )
}

export default Button
