import React from 'react';
import PostItem from 'components/common/PostItem';
import { PostListType } from 'types/post.types';
import { Container, Wrapper, More } from './style';

interface Props {
  posts: PostListType[];
  moreURL?: string;
}

const PostList: React.FC<Props> = ({ posts, moreURL }) => {
  return (
    <Wrapper>
      <Container>
        {posts.slice(0, 3).map(
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
        {moreURL && <More to={moreURL}>more {'>'}</More>}
      </Container>
    </Wrapper>
  );
};

export default PostList;
