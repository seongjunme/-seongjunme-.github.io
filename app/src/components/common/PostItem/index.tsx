import React from 'react';
import { Content, Thumbnail, Wrapper, Title, Date, Category, CategoryItem, Summary, Footer } from './style';
import { PostItemType } from 'types/post.types';

interface Props extends PostItemType {
  link: string;
}

const PostItem: React.FC<Props> = ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) => {
  return (
    <Wrapper to={link}>
      <Thumbnail image={gatsbyImageData} alt="thumbnail" />
      <Content>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>#{category}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </Content>
      <Footer>
        <span>By</span>
        <b>Jun</b>
      </Footer>
    </Wrapper>
  );
};

export default PostItem;
