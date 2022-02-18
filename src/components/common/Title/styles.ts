import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

export type TitleProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  elementStyle?: 'large' | 'medium'
  align?: 'center' | 'left' | 'right'
  children: ReactNode
}

export const Title = styled.h1.attrs<TitleProps>(({ level }) => ({
  as: level ? `h${level}` : 'h1'
}))<TitleProps>`
  color: var(--title);
  font-family: var(--titleFont);

  ${({ elementStyle, align }) => css`
    font-size: ${elementStyle === 'large' ? '3rem' : '1.5rem'};
    font-weight: ${elementStyle === 'large' ? '700' : '600'};
    line-height: ${elementStyle === 'large' ? '3.5rem' : '2rem'};
    text-align: ${align};
  `}
`
