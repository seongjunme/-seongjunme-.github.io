import React from 'react';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import styled from '@emotion/styled';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
