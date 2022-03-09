import styled from '@emotion/styled';
import { MAIN_LAYOUT_WIDTH } from 'utils';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${MAIN_LAYOUT_WIDTH}px;
  margin: 0 auto;
  word-break: break-all;

  line-height: 1.8;
  font-size: 1.125rem;
  font-weight: 400;
  color: #ececec;

  p {
    padding: 3px 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 2.414rem 0 1rem;
    font-weight: inherit;
    line-height: 1.42;
  }
  h1 {
    /* margin-top: 0; */
    font-size: 3.598rem;
  }

  h2 {
    font-size: 2.827rem;
  }

  h3 {
    font-size: 1.999rem;
  }

  h4 {
    font-size: 1.414rem;
  }

  h5 {
    font-size: 1.121rem;
  }

  h6 {
    font-size: 0.88rem;
  }

  blockquote {
    margin: 10px 0;
    border-left: 5px solid #7a7a7a;
    font-style: italic;
    padding: 5px 15px;
    text-align: left;
    background-color: #1e1e1e;
  }

  aside {
    background-color: #1e1e1e;
    margin: 10px 0;
  }

  table {
    background-color: #22272e;
    border-collapse: collapse;
    th,
    td {
      &:not(first-child) {
        border: 1px solid #444c56;
      }
      /* border: 1px solid #444c56; */
      padding: 6px 13px;
    }
  }

  ol,
  ul {
    margin-left: 20px;
    padding: 10px 0;
  }

  hr {
    margin: 30px 0;
    background: #4d4d4d;
    border: none;
    height: 1px;
    width: 100%;
  }

  a {
    &:link {
      text-decoration: none;
      text-shadow: 0 0 24px;
    }

    &:hover {
      color: #4263eb;
    }
  }

  strong {
    font-weight: bold;
  }

  deckgo-highlight-code {
    font-size: 14px;
  }
`;
