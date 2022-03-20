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
  z-index: 100;
`;

export const List = styled.li<{ isSelected: boolean }>`
  list-style: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 400)};
  border-bottom: ${({ isSelected }) => (isSelected ? '1px solid #ffffff' : 'none')};

  &:hover {
    border-bottom: 1px solid #ffffff;
  }
`;
