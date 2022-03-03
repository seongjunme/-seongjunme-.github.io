import { PostItemType } from 'components/main/PostList/PostItem/types';

export interface PostPageType {
  node: {
    html: string;
    frontmatter: PostItemType;
  };
}
