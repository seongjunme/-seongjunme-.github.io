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
  text-decoration: ${({ activate }) => (activate ? 'underline' : 'none')};
  text-underline-position: under;
  cursor: pointer;

  &::last-of-type {
    margin-right: 0;
  }
`;

export default CategoryItem;
