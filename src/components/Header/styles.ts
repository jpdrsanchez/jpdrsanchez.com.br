import styled from 'styled-components'

import Container from 'components/common/Container'

export const Header = styled.header`
  position: relative;
`

export const HeaderContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: calc(var(--gutter) * 2);
`
