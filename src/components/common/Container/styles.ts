import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media (max-width: 35.9375em) {
    padding-right: var(--gutter);
    padding-left: var(--gutter);
  }

  @media (min-width: 36em) {
    max-width: var(--containerSm);
  }

  @media (min-width: 48em) {
    max-width: var(--containerMd);
  }

  @media (min-width: 62em) {
    max-width: var(--containerLg);
  }

  @media (min-width: 75em) {
    max-width: var(--containerXl);
  }
`
