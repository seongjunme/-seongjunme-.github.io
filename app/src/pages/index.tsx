import React from 'react';
import GlobalStyle from 'components/common/GlobalStyle';
import Introdution from 'components/main/Introdution';
import styled from '@emotion/styled';
import Footer from 'components/common/Footer';
import CategoryList from 'components/main/CategoryList';

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
};

const IndexPage = () => {
  return (
    <Container>
      <GlobalStyle />
      <Introdution />
      <CategoryList seletedCategory="Web" categoryList={CATEGORY_LIST} />
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
