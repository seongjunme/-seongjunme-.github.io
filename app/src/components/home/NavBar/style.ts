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
`;

export const List = styled.li<{ isSelected: boolean }>`
  list-style: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 400)};
  text-decoration: ${({ isSelected }) => (isSelected ? 'underline' : 'none')};
  text-underline-position: under;
`;
