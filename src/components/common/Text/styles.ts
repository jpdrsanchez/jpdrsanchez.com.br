import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

export type TextProps = {
  elementStyle?: 'normal' | 'small'
  align?: 'center' | 'left' | 'right'
  children: ReactNode
}

export const Text = styled.p<TextProps>`
  font-weight: 400;

  ${({ elementStyle, align }) => css`
    font-size: ${elementStyle === 'normal' ? '1rem' : '.875rem'};
    line-height: ${elementStyle === 'normal' ? '1.5rem' : '1.25rem'};
    text-align: ${align};
  `}
`
