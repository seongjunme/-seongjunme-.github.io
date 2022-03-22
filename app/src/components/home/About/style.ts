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
  width: 67.5rem;
  margin: 0 auto;
  padding: 0rem 6.25rem;

  @media (max-width: 786px) {
    width: 100%;
  }
`;

export const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 400;

  @media (max-width: 786px) {
    font-size: 1rem;
  }
`;

export const Title = styled.div`
  margin-top: 0.3125rem;
  font-size: 2.1875rem;
  font-weight: 700;

  @media (max-width: 786px) {
    font-size: 1.25rem;
  }
`;
