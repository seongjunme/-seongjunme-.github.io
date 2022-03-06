import React from 'react';
import PostItem from 'components/common/PostItem';
import { PostListType } from 'types/post.types';
import { Container } from './style';

interface Props {
  posts: PostListType[];
}

const Projects: React.FC<Props> = ({ posts }) => {
  return (
    <Container>
      {posts.map(
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
    </Container>
  );
};

export default Projects;
