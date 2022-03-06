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
