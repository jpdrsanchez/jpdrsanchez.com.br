import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 35.625rem;
  margin: 0 auto;
  position: relative;

  form {
    display: flex;
    border: 1px solid var(--borders);
    border-radius: 0.3125rem;

    & > * {
      border: none;
      background: none;
      outline: 0px;
      appearance: none;
      font-family: var(--textFont);
    }
  }

  input {
    flex: 1;
    padding: 0.4375rem 1.25rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--text);
    width: 100%;

    &::placeholder {
      color: var(--text);
    }
  }

  button {
    cursor: pointer;
    height: 2.375rem;
    width: 2.4375rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: var(--text);
    border-left: 0.0625rem solid var(--borders);
  }
`
