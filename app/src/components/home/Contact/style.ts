import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 24px;
  font-size: 18px;
`;
