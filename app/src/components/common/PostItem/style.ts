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
  height: 145px;
  border-radius: 10px 10px 0 0;

  @media (max-width: 479px) {
    height: 40px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    height: 60px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 105px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 15px;
  background-color: #1e1e1e;
  height: 200px;
  color: white;

  @media (max-width: 479px) {
    height: 96px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    height: 102px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 140px;
  }
`;

export const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 479px) {
    font-size: 10px;
    white-space: nowrap;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 12px;
    white-space: nowrap;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }
`;

export const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;

  @media (max-width: 479px) {
    font-size: 8px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 10px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`;

export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;

  @media (max-width: 479px) {
    flex-wrap: nowrap;
    overflow: hidden;
    margin: 2px -5px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    flex-wrap: nowrap;
    overflow: hidden;
    margin: 4px -5px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 6px -5px;
  }
`;

export const CategoryItem = styled.div`
  margin: 0px 5px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  color: white;

  @media (max-width: 479px) {
    font-size: 6px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 8px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`;

export const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  font-size: 14px;
  color: #d9d9d9;

  @media (max-width: 767px) {
    font-size: 8px;
    white-space: nowrap;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
    white-space: nowrap;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #2a2a2a;

  height: 45px;
  background-color: #1e1e1e;
  font-weight: 400;
  color: white;
  span {
    font-size: 12px;
    color: #acacac;
  }

  b {
    margin: 0 4px;
    font-size: 14px;
  }

  @media (max-width: 479px) {
    height: 10px;

    span {
      font-size: 6px;
    }

    b {
      font-size: 8px;
    }
  }

  @media (min-width: 480px) and (max-width: 767px) {
    height: 18px;

    span {
      font-size: 8px;
    }

    b {
      font-size: 10px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 25px;

    span {
      font-size: 10px;
    }

    b {
      font-size: 12px;
    }
  }
`;
