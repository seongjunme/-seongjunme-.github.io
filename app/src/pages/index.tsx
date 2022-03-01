import React from 'react';
import GlobalStyle from 'components/common/GlobalStyle';
import Introdution from 'components/main/Introdution';
import styled from '@emotion/styled';
import Footer from 'components/common/Footer';

const IndexPage = () => {
  return (
    <Container>
      <GlobalStyle />
      <Introdution />
      <Footer />
    </Container>
  );
};
export default IndexPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
