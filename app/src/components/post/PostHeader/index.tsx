import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { Wrapper, BackgroundImg } from './style';
import PostInfo from './PostInfo';
import { PostInfoType } from 'types/post.types';

interface Props extends PostInfoType {
  image: IGatsbyImageData;
}

const Header: React.FC<Props> = ({ image, title, date, categories }) => {
  return (
    <Wrapper>
      <BackgroundImg image={image} alt="thumbnail" />
      <PostInfo title={title} date={date} categories={categories}></PostInfo>
    </Wrapper>
  );
};

export default Header;
