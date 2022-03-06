import React from 'react';
import { Container, List } from './style';

interface Props {
  currentPageName: string;
}

const NavBar: React.FC<Props> = ({ currentPageName }) => {
  return (
    <Container>
      <List isSelected={currentPageName === 'About'}>About</List>
      <List isSelected={currentPageName === 'Project'}>Project</List>
      <List isSelected={currentPageName === 'Blog'}>Blog</List>
      <List isSelected={currentPageName === 'Contact'}>Contact</List>
    </Container>
  );
};

export default NavBar;
