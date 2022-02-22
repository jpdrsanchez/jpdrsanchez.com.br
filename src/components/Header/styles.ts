import styled from 'styled-components'

import Container from 'components/common/Container'

export const Header = styled.header`
  position: relative;
`

export const HeaderContainer = styled(Container)`
  & > * {
    @media (min-width: 48em) {
      grid-row: 1;
    }

    &:nth-child(1) {
      @media (min-width: 48em) {
        grid-column: 1 / 3;
      }
    }

    &:nth-child(2) {
      @media (min-width: 48em) {
        grid-column: 9 / 13;
      }
    }

    &:nth-child(3) {
      @media (min-width: 48em) {
        grid-column: 3 / 9;
      }
    }
  }

  display: grid;
  gap: calc(var(--gutter) * 2);
  align-items: center;
  padding-bottom: 1.5625rem;
  padding-top: 1.6875rem;
  border-bottom: 0.0625rem solid var(--borders);
  grid-template-columns: 1fr 1fr 1fr;

  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  & > a {
    display: block;
    max-width: 100%;
    position: relative;

    svg {
      max-width: 4.375rem;
      height: auto;
    }

    p {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  }
`
