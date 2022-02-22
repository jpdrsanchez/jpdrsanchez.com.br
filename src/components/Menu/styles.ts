import styled from 'styled-components'

export const Navigation = styled.nav`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    appearance: none;
    padding: 0;
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    z-index: 999;
    margin-left: auto;

    &:hover {
      outline: none;
    }

    &:focus {
      outline: none;
    }

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 0.1875rem;
      background: var(--title);
      border-radius: 0.5rem;
      box-shadow: 0 0.375rem var(--title), 0 -0.375rem var(--title);
      transition: all 0.3s;
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 0.1875rem;
      background: var(--title);
      border-radius: 0.5rem;
      transition: all 0.3s;
      position: absolute;
    }

    &.active {
      &::before {
        background: #fff;
        box-shadow: none;
        transform: rotate(45deg);
      }

      &::after {
        background: #fff;
        transform: rotate(-45deg);
      }
    }

    @media (min-width: 48em) {
      display: none;
    }

    span {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  }

  div {
    @media (max-width: 47.9375em) {
      position: fixed;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      height: 100%;
      z-index: 900;
      opacity: 0;
      pointer-events: none;

      &.active {
        opacity: 1;
        pointer-events: initial;
        transition: opacity 0.3s;

        ul {
          transform: translateX(0);
        }
      }
    }
  }

  ul {
    @media (max-width: 47.9375em) {
      background: var(--mainBg);
      width: 75%;
      height: 100%;
      overflow: auto;
      padding-top: 10rem;
      padding-left: 1.875rem;
      padding: 1.6875rem 1.875rem 1.875rem;
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
      position: relative;
      transform: translateX(-100%);
      transition: transform 0.3s;
      transition-delay: 0.3s;

      &::before {
        content: '';
        display: block;
        width: 4.375rem;
        height: 5.4375rem;
        background: url('/images/logo.svg') no-repeat center center;
        background-size: contain;
        margin-bottom: 1.5625rem;
      }
    }

    @media (max-width: 35.9375em) {
      width: 85%;
    }

    @media (min-width: 48em) {
      display: flex;
      align-items: center;
      gap: 0.9375rem;
    }
  }

  a {
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: var(--text);
    padding: 0.9375rem 0.625rem;
    display: block;

    @media (min-width: 48em) {
      padding: 0.9375rem;
    }

    &:hover {
      color: var(--link);
    }
  }
`
