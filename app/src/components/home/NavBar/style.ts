import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  right: 6.25rem;
  width: 18.75rem;
  height: 6.25rem;
  align-items: center;
  z-index: 100;

  @media (max-width: 786px) {
    position: fixed;
    right: 0rem;
  }
`;

export const List = styled.li<{ isSelected: boolean }>`
  list-style: none;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 400)};
  border-bottom: ${({ isSelected }) => (isSelected ? '1px solid #ffffff' : 'none')};

  &:hover {
    border-bottom: 0.0625rem solid #ffffff;
  }
`;
