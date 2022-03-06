import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface PostItemType {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  type: string;
}

export interface PostPageType {
  node: {
    html: string;
    frontmatter: PostItemType;
  };
}

export interface PostInfoType {
  title: string;
  date: string;
  categories: string[];
}

export interface PostListType {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: PostItemType;
  };
}
