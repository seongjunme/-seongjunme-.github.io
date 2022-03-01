import React from 'react';
import GlobalStyle from 'components/common/GlobalStyle';
import Introdution from 'components/main/Introdution';
import styled from '@emotion/styled';

const IndexPage = () => {
  return (
    <Container>
      <GlobalStyle />
      <Introdution />
    </Container>
  );
};
export default IndexPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
