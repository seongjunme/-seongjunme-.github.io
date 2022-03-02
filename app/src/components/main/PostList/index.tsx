import React from 'react';
import PostItem from './PostItem';
import { Wrapper } from './style';
import { PostListType } from './types';

interface Props {
  posts: PostListType[];
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <Wrapper>
      {posts.map(({ node: { id, frontmatter } }) => (
        <PostItem key={id} link="https://www.google.co.kr/" {...frontmatter} />
      ))}
    </Wrapper>
  );
};

export default PostList;
