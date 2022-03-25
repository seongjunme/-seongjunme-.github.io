import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.3125rem;
  z-index: 1000;
  background-color: rgba(30, 31, 33, 0.6);
  backdrop-filter: blur(5px);

  div {
    width: 0%;
    height: 0.1875rem;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 0 0.3125rem 0.3125rem 0;
  }
`;
