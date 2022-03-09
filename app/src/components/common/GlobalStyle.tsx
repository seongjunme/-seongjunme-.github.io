import React from 'react';
import { Global, css } from '@emotion/react';

const defaultStyle = css`
  @import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,300);
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-weight: 300;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

const GlobalStyle: React.FC = () => <Global styles={defaultStyle} />;

export default GlobalStyle;
