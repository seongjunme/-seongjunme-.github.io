import { graphql } from 'gatsby';
import React from 'react';
import Layout from 'components/common/Layout';
import ScrollProgressBar from 'components/post/ScrollProgressBar';
import PostHeader from 'components/post/PostHeader';
import { PostPageType } from 'types/post.types';
import PostContent from 'components/post/PostContent';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

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
      <ScrollProgressBar />
      <PostHeader image={gatsbyImageData} title={title} date={date} categories={categories} />
      <PostContent html={html} />
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
