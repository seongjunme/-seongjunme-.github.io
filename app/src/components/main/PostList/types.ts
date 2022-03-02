import { PostItemType } from './PostItem/types';

export interface PostListType {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: PostItemType;
  };
}
