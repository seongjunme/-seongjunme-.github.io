import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  transition: 0.5s transform;
  cursor: pointer;
  width: 300px;
  height: 350px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transform: translateY(-10px);
  }
`;

export const Thumbnail = styled(GatsbyImage)`
  width: 100%;
  height: 145px;
  border-radius: 10px 10px 0 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 15px;
  background-color: #1e1e1e;
  height: 200px;
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
`;

export const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`;

export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`;

export const CategoryItem = styled.div`
  margin: 0px 5px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  color: white;
`;

export const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  font-size: 14px;
  color: #d9d9d9;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #2a2a2a;

  height: 45px;
  background-color: #1e1e1e;
  font-weight: 400;

  span {
    font-size: 12px;
    color: #acacac;
  }

  b {
    margin: 0 4px;
    font-size: 14px;
  }
`;
