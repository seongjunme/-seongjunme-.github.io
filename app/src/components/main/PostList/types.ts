import { PostItemType } from './PostItem/types';

export interface PostListType {
  node: {
    id: string;
    frontmatter: PostItemType;
  };
}
