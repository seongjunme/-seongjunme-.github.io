import styled from '@emotion/styled';
import { MAIN_LAYOUT_WIDTH } from 'global';

export const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${MAIN_LAYOUT_WIDTH}px;
  height: 400px;
  margin: 0 auto;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

export const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;
`;
