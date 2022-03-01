import styled from '@emotion/styled';
import { MAIN_LAYOUT_WIDTH } from 'global';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: ${MAIN_LAYOUT_WIDTH}px;
  margin: 0 auto;
  padding: 50px 0 100px;
`;
