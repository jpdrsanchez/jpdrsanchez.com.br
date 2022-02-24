import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }
`

export const ContentArea = styled.div`
  background: var(--secondBg);
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;
  margin-top: -0.0625rem;

  h2 {
    margin-bottom: 1.875rem;
  }

  a {
    margin: 3.75rem auto 0;
  }
`
