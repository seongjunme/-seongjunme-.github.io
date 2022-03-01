import React from 'react';
import { Content, Thumbnail, Wrapper, Title, Date, Category, CategoryItem, Summary } from './style';

interface Props {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: string;
  link: string;
}

const PostItem: React.FC<Props> = ({ title, date, categories, summary, thumbnail, link }) => {
  return (
    <Wrapper to={link}>
      <Thumbnail src={thumbnail} alt="thumbnail" />
      <Content>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </Content>
    </Wrapper>
  );
};

export default PostItem;
