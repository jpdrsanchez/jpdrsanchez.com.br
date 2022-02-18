import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

export type TitleProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  style?: 'large' | 'medium'
  align?: 'center' | 'left' | 'right'
  children: ReactNode
}

export const Title = styled.h1.attrs<TitleProps>(({ level }) => ({
  as: level ? `h${level}` : 'h1'
}))<TitleProps>`
  color: var(--title);
  font-family: var(--titleFont);

  ${({ style = 'large', align = 'left' }) => css`
    font-size: ${style === 'large' ? '3rem' : '1.5rem'};
    font-weight: ${style === 'large' ? '700' : '600'};
    line-height: ${style === 'large' ? '3.5rem' : '2rem'};
    text-align: ${align};
  `}
`
