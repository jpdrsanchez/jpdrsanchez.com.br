import styled from 'styled-components'

export const Main = styled.main`
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;

  article {
    max-width: 48.125rem;
    margin: 0 auto;
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
  }

  header {
    margin-bottom: 1.875rem;
  }

  h1 {
    @media (max-width: 47.9375rem) {
      font-size: 2rem;
      line-height: 1.2;
    }
  }
`

export const PostCover = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  position: relative;
  box-shadow: 2px 2px 6px rgba(20, 20, 20, 0.1);
  border-radius: 0.3125rem;
  overflow: hidden;

  @media (min-width: 36em) {
    aspect-ratio: 7 / 2;
  }
`

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.875rem;
  line-height: 1rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`

export const PostBody = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;

  p + p {
    margin-top: 1.5rem;
  }
`
