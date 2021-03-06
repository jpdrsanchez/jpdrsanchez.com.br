import { createGlobalStyle } from 'styled-components'

import { reset } from './reset'

const GlobalStyles = createGlobalStyle`

  ${reset}

  :root {
    /* Colors */
    --title: #141414;
    --text: #69707d;
    --link: #219ebc;
    --mainBg: #fff;
    --secondBg: #e6e6e6;
    --borders: #e4e9f2;
    --codeUnselected: #abb2bf;
    --codeSelected: #fff;
    --codeProp: #ff616e;
    --codeValue: #8cc265;
    --codeBg: #282c34;
    --codeTab: #21252b;

    /* Typography */
    --titleFont: 'Fira Sans', sans-serif;
    --textFont: 'Fira Code', monospace;

    /* Units & Spaces */
    --containerSm: 33.75rem; //540px
    --containerMd: 45rem; //720px
    --containerLg: 60rem; //960px
    --containerXl: 73.125rem; //1170px
    --gutter: .9375rem; //15px
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    font-family: var(--textFont);
    background: var(--mainBg);
    color: var(--text);
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .no-overflow {
    overflow: hidden;
  }

  .red {
    color: var(--codeProp);
  }

  .green {
    color: var(--codeValue);
  }

  .hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`

export default GlobalStyles
