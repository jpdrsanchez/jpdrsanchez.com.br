import styled from 'styled-components'

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  justify-content: flex-end;

  @media (max-width: 47.9375em) {
    justify-content: center;
  }

  a {
    font-size: 1.875rem;
    color: var(--text);

    &:hover {
      color: var(--title);
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
