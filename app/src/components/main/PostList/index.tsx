import React, { useMemo } from 'react';
import PostItem from './PostItem';
import { Wrapper } from './style';
import { PostListType } from './types';

interface Props {
  posts: PostListType[];
  selectedCategory: string;
}

const PostList: React.FC<Props> = ({ posts, selectedCategory }) => {
  const filteredPosts = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }) => selectedCategory === 'All' || categories.includes(selectedCategory),
      ),
    [selectedCategory],
  );

  return (
    <Wrapper>
      {filteredPosts.map(({ node: { id, frontmatter } }) => (
        <PostItem key={id} link="www.naver.com" {...frontmatter} />
      ))}
    </Wrapper>
  );
};

export default PostList;
