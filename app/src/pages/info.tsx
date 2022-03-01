import React from 'react';
import { graphql } from 'gatsby';
import Text from 'components/Text';

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}

const InfoPage: React.FC<Props> = ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) => {
  return (
    <div>
      <Text text={title}></Text>
      <Text text={description}></Text>
      <Text text={author}></Text>
    </div>
  );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
