import React from 'react';
import { Container, List } from './style';

interface Props {
  currentPageName: string;
  onClickNavBar: (e: React.MouseEvent<HTMLElement>) => void;
}

const NavBar: React.FC<Props> = ({ currentPageName, onClickNavBar }) => {
  return (
    <Container>
      <List isSelected={currentPageName === 'About'} onClick={onClickNavBar}>
        About
      </List>
      <List isSelected={currentPageName === 'Project'} onClick={onClickNavBar}>
        Project
      </List>
      <List isSelected={currentPageName === 'Blog'} onClick={onClickNavBar}>
        Blog
      </List>
      <List isSelected={currentPageName === 'Contact'} onClick={onClickNavBar}>
        Contact
      </List>
    </Container>
  );
};

export default NavBar;
