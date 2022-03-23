import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';

export const ProfileImage = styled(GatsbyImage)`
  width: 12.5rem;
  height: 12.5rem;
  margin-bottom: 1.875rem;
  border-radius: 50%;

  @media (max-width: 767px) {
    width: 9.375rem;
    height: 9.375rem;
  }
`;

export const Container = styled.div`
  /* height: 100vh; */
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 67.5rem;
  margin: 0 auto;
  padding: 0rem 6.25rem;

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 48rem;
  }
`;

export const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 400;

  @media (max-width: 479px) {
    font-size: 0.875rem;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.25rem;
  }
`;

export const Title = styled.div`
  margin-top: 0.3125rem;
  font-size: 2.1875rem;
  font-weight: 700;

  @media (max-width: 479px) {
    font-size: 0.75rem;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 1.25rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.5rem;
  }
`;
