import styled from '@emotion/styled';
import { MAIN_LAYOUT_WIDTH } from 'utils';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${MAIN_LAYOUT_WIDTH}px;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;

  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  p {
    padding: 3px 0;
  }

  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 30px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 50px;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  hr {
    margin: 30px 0;
  }

  a {
    color: #4263eb;
    text-decoration: underline;
  }
`;
