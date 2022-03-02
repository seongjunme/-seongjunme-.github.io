import React from 'react';
import { Content, Thumbnail, Wrapper, Title, Date, Category, CategoryItem, Summary } from './style';
import { PostItemType } from './types';

interface Props extends PostItemType {
  link: string;
}

const PostItem: React.FC<Props> = ({ title, date, categories, summary, thumbnail: { publicURL }, link }) => {
  return (
    <Wrapper to={link}>
      <Thumbnail src={publicURL} alt="thumbnail" />
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
