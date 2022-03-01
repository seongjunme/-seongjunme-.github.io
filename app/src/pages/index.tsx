import React from 'react';
import GlobalStyle from 'components/common/GlobalStyle';
import ProfileImage from 'components/main/ProfileImage';
import styled from '@emotion/styled';

const IndexPage = () => {
  return (
    <Container>
      <GlobalStyle />
      <ProfileImage />
    </Container>
  );
};
export default IndexPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
