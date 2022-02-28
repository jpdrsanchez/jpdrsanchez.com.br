import styled from 'styled-components'

export const Main = styled.main`
  min-height: calc(100vh - 239px);
  padding: 1.875rem 0.9375rem;
  display: flex;

  @media (min-width: 36em) {
    min-height: calc(100vh - 205px);
  }
`

export const Content = styled.div`
  margin: auto;
  max-width: 48.125rem;
  width: 100%;

  h1 {
    margin-bottom: 1.25rem;
  }

  p {
    margin-bottom: 1.25rem;
    word-wrap: break-word;
  }

  nav {
    justify-content: center;
  }
`
