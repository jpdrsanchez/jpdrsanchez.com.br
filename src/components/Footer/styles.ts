import Container from 'components/common/Container'
import styled from 'styled-components'

export const Footer = styled.footer`
  position: relative;
`

export const FooterContainer = styled(Container)`
  border-top: var(--borders) 0.0625rem solid;
  padding-top: 0.8125rem;
  padding-bottom: 0.8125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
