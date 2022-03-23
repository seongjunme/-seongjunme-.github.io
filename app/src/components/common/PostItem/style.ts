import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px)
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 0.625rem;
  transition: 0.5s transform;
  width: 18.75rem;
  height: 21.875rem;
  cursor: pointer;
  animation: ${fadeIn} 1s;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 479px) {
    width: 6.25rem;
    height: 9.375rem;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    width: 8.125rem;
    height: 11.25rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 13.75rem;
    height: 16.875rem;
  }
`;

export const Thumbnail = styled(GatsbyImage)`
  width: 100%;
  height: 9.0625rem;
  border-radius: 0.625rem 0.625rem 0 0;

  @media (max-width: 479px) {
    height: 2.5rem;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    height: 3.75rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 6.5625rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.9375rem;
  background-color: #1e1e1e;
  height: 12.5rem;
  color: white;

  @media (max-width: 479px) {
    height: 6rem;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    height: 6.375rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 8.75rem;
  }
`;

export const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 0.1875rem;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  font-size: 1.125rem;
  font-weight: 500;

  @media (max-width: 479px) {
    font-size: 0.625rem;
    white-space: nowrap;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 0.75rem;
    white-space: nowrap;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 1rem;
  }
`;

export const Date = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  opacity: 0.7;

  @media (max-width: 479px) {
    font-size: 0.5rem;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 0.625rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.75rem;
  }
`;

export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.625rem;
  margin: 0.625rem -0.3125rem;

  @media (max-width: 479px) {
    flex-wrap: nowrap;
    overflow: hidden;
    margin: 0.125rem -0.3125rem;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    flex-wrap: nowrap;
    overflow: hidden;
    margin: 0.25rem -0.3125rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 0.375rem -0.3125rem;
  }
`;

export const CategoryItem = styled.div`
  margin: 0rem 0.3125rem;
  border-radius: 0.1875rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;

  @media (max-width: 479px) {
    font-size: 0.375rem;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 0.5rem;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.75rem;
  }
`;

export const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  color: #d9d9d9;

  @media (max-width: 767px) {
    font-size: 0.5rem;
    white-space: nowrap;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.75rem;
    white-space: nowrap;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.625rem;
  border-top: 0.0625rem solid #2a2a2a;

  height: 2.8125rem;
  background-color: #1e1e1e;
  font-weight: 400;
  color: white;
  span {
    font-size: 0.75rem;
    color: #acacac;
  }

  b {
    margin: 0 0.25rem;
    font-size: 0.875rem;
  }

  @media (max-width: 479px) {
    height: 0.625rem;

    span {
      font-size: 0.375rem;
    }

    b {
      font-size: 0.5rem;
    }
  }

  @media (min-width: 480px) and (max-width: 767px) {
    height: 1.125rem;

    span {
      font-size: 0.5rem;
    }

    b {
      font-size: 0.625rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 1.5625rem;

    span {
      font-size: 0.625rem;
    }

    b {
      font-size: 0.75rem;
    }
  }
`;
