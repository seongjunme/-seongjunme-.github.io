import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';

export const ProfileImage = styled(GatsbyImage)`
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
  border-radius: 50%;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 1080px;
  margin: 0 auto;
  padding: 100px;
`;

// export const Title = styled.h6``
