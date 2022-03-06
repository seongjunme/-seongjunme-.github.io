import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  right: 100px;
  width: 300px;
  height: 100px;
  align-items: center;

  li {
    list-style: none;
  }
`;
