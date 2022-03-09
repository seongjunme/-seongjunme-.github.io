import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { Wrapper } from './style';
import PostInfo from '../PostInfo';
import { PostInfoType } from 'types/post.types';

interface Props extends PostInfoType {
  image: IGatsbyImageData;
}

const Header: React.FC<Props> = ({ title, date, categories }) => {
  return <Wrapper>{categories && <PostInfo title={title} date={date} categories={categories} />}</Wrapper>;
};

export default Header;
