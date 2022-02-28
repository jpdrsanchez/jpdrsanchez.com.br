import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 0.625rem;
  flex-wrap: wrap;

  a {
    color: var(--mainBg);
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5rem;
    font-family: var(--titleFont);
    padding: 0.125rem 0.75rem 0.0625rem;
    box-shadow: 2px 2px 10px rgba(20, 20, 20, 0.25);
    border-radius: 0.625rem;
    background: var(--title);
    transition: all 0.3s;

    &:hover {
      background: rgba(20, 20, 20, 0.8);
    }
  }
`
