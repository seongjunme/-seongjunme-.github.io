import React, { useMemo } from 'react';
import PostItem from '../../common/PostItem';
import { Wrapper } from './style';
import { PostListType } from 'types/post.types';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

interface Props {
  posts: PostListType[];
  selectedCategory: string;
}

const BlogList: React.FC<Props> = ({ posts, selectedCategory }) => {
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

  const { targetRef, postsByPage } = useInfiniteScroll(filteredPosts);

  return (
    <Wrapper ref={targetRef}>
      {postsByPage.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }) => (
          <PostItem key={id} link={slug} {...frontmatter} />
        ),
      )}
    </Wrapper>
  );
};

export default BlogList;
