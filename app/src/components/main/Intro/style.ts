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
  justify-content: center;
  align-items: center;
  width: 1080px;
  margin: 0 auto;
  padding: 0px 100px;
`;

export const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
`;

export const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;
`;
