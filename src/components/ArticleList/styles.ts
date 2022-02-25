import styled from 'styled-components'

export const List = styled.nav`
  display: grid;
  gap: 1.875rem;
  width: 100%;
  max-width: 35.625rem;
  margin: 0 auto 3.75rem;
`

export const Item = styled.a`
  display: block;
  width: 100%;
  color: var(--text);
  position: relative;

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    background: none;
    border-radius: 0.3125rem;
    z-index: 700;
    transition: all 0.3s;

    &:nth-of-type(1) {
      border-top: var(--link) 0.0625rem solid;
      border-bottom: var(--link) 0.0625rem solid;
      transform: scaleX(0);
    }

    &:nth-of-type(2) {
      border-left: var(--link) 0.0625rem solid;
      border-right: var(--link) 0.0625rem solid;
      transform: scaleY(0);
    }
  }

  &:hover {
    & > div {
      &:nth-of-type(1) {
        transform: scale(1);
      }
      &:nth-of-type(2) {
        transform: scale(1);
      }
    }
  }

  article {
    background: var(--mainBg);
    display: grid;
    box-shadow: 0px 0px 5px rgba(228, 233, 242, 0.9);
    border-radius: 0.3125rem;
    overflow: hidden;

    @media (min-width: 36em) {
      grid-template-columns: 1fr 10.625rem;
    }

    h3 {
      margin-bottom: 0.9375rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    p {
      margin-bottom: 0.9375rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }

    div {
      &:first-child {
        padding: 1.25rem 1.875rem 1.25rem 1.25rem;
      }

      &:last-child {
        position: relative;

        @media (max-width: 35.9375em) {
          grid-row: 1;
          aspect-ratio: 16 / 9;
        }
      }
    }

    span {
      font-size: 0.625rem;
      line-height: 1rem;
    }
  }
`
