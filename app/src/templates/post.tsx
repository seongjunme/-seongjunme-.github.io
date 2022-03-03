import { graphql } from 'gatsby';
import React from 'react';
import Layout from 'components/common/Layout';
import Header from 'components/post/Header';
import { PostPageType } from 'types/post.types';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: PostPageType[];
    };
  };
}

const post: React.FC<Props> = ({
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            html,
            frontmatter: {
              title,
              date,
              categories,
              thumbnail: {
                childImageSharp: { gatsbyImageData },
              },
            },
          },
        },
      ],
    },
  },
}) => {
  return (
    <Layout>
      <Header image={gatsbyImageData}></Header>
    </Layout>
  );
};

export default post;

export const getMarkDownData = graphql`
  query getMarkDownData($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
