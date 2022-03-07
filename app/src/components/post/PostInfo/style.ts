import styled from '@emotion/styled';
import { MAIN_LAYOUT_WIDTH } from 'utils';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${MAIN_LAYOUT_WIDTH}px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;
  color: #ffffff;
`;

export const Title = styled.div`
  /* display: -webkit-box; */
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  /* --webkit-line-clamp: 2; */
  /* --webkit-box-orient: vertical; */
  font-size: 45px;
  font-weight: 800;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;

  div {
    margin-top: 10px;
  }
`;
