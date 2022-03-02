import { PostItemType } from './PostItem/types';

export interface PostType {
  node: {
    id: string;
    frontmatter: PostItemType;
  };
}
