import { graphql } from 'gatsby';
import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            html: string;
            frontmatter: {
              title: string;
              date: string;
              categories: string[];
              summary: string;
              thumbnail: {
                childImageSharp: {
                  gatsbyImageData: IGatsbyImageData;
                };
              };
            };
          };
        },
      ];
    };
  };
}

const post: React.FC<Props> = ({
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: { html, frontmatter },
        },
      ],
    },
  },
}) => {
  console.log(html, frontmatter);
  return <div></div>;
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
