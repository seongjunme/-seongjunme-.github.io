export interface PostItemType {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: {
    publicURL: string;
  };
}
