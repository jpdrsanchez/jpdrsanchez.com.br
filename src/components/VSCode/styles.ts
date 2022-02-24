import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  background: var(--codeBg);
  max-width: 48.125rem;
  margin: 0 auto;
  box-shadow: 2px 2px 6px rgba(20, 20, 20, 0.25);
`

export const TabList = styled.div`
  display: flex;
  background: var(--codeTab);

  button {
    padding: 0.3125rem 0.9375rem;
    display: flex;
    gap: 0.4375rem;
    background: transparent;
    border: none;
    outline: 0px;
    cursor: pointer;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--codeUnselected);
    align-items: center;

    &[aria-selected='true'] {
      background: var(--codeBg);
    }
  }
`

export const TabPanels = styled.div`
  padding: 1.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--codeUnselected);
`

export const SpaceOne = styled.div`
  margin-left: 1.25rem;
`

export const SpaceTwo = styled.div`
  margin-left: 2.5rem;
`
