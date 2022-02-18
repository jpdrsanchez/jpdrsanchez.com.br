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
    --secondBg: rgba(224, 224, 224, 0.8);
    --borders: #e4e9f2;
    --codeUnselected: #abb2bf;
    --codeSelected: #fff;
    --codeProp: #ff616e;
    --codeValue: #8cc265;

    /* Typography */
    --titleFont: 'Fira Sans', sans-serif;
    --textFont: 'Fira Code', monospace;

    /* Units & Spaces */
    --containerSm: 33.75rem //540px
    --containerMd: 45rem //720px
    --containerLg: 60rem //960px
    --containerXl: 73.125rem //1170px
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
    color: var(text);
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
`

export default GlobalStyles
