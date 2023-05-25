import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFFFFF',
  claro: '#FFEBD9',
  vermelho: '#E66767',
  fundoClaro: '#F5F5F5',
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${cores.branco};
    color: ${cores.vermelho};
    // padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 90%;
    }
  }

`