import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

interface CategoryItemProps {
  activate: boolean;
}

interface LinkProps extends CategoryItemProps {
  children: React.ReactNode;
  className?: string;
  to: string;
}

const CategoryItem = styled(({ activate, ...props }: LinkProps) => <Link {...props} />)<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ activate }) => (activate ? '800' : '400')};
  border-bottom: ${({ activate }) => (activate ? '1px solid #ffffff' : 'none')};
  cursor: pointer;

  &::last-of-type {
    margin-right: 0;
  }

  &:hover {
    border-bottom: 1px solid #ffffff;
  }
`;

export default CategoryItem;
