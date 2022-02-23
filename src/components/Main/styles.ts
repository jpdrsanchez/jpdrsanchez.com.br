import Container from 'components/common/Container'
import styled from 'styled-components'

export const Main = styled.main`
  position: relative;
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;

  @media (max-width: 35.9375em) {
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
  }

  @media (min-width: 48em) {
    padding-top: 5.625rem;
    padding-bottom: 5.625rem;
  }
`

export const MainContainer = styled(Container)`
  display: grid;
  gap: 1.875rem;
  align-items: center;

  @media (min-width: 48em) {
    grid-template-columns: repeat(12, 1fr);
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 48em) {
    grid-column: 1 / 4;
  }
`

export const Content = styled.div`
  @media (min-width: 48em) {
    grid-column: 4 / 13;
  }

  @media (min-width: 62em) {
    grid-column: 4 / 11;
  }

  h1 {
    margin-bottom: 1.25rem;

    @media (max-width: 47.9375em) {
      text-align: center;
    }
  }

  p + p {
    margin-top: 1.5rem;
  }
`
