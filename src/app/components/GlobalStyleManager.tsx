import { createGlobalStyle } from "styled-components"

export default function GlobalStyleManager() {
  return <Common />
}

const Common = createGlobalStyle`
  :root {
    --color-white: #ffffff;
    --color-black: #000000;
    --color-background: #f7f8fA;
    --color-text: #222222;
    --color-border: #dddddd;
  }

  html {
    background-color: var(--color-background);
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;

    overflow-y: scroll;

    font-family: Inter, sans-serif;
    color: var(--color-text);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal; // for Safari

    margin: 0;
  }

  p, pre {
    margin: 0;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance:none;
  }
`
