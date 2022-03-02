import React from 'react';
import { graphql } from 'gatsby';
import GlobalStyle from 'components/common/GlobalStyle';
import Introdution from 'components/main/Introdution';
import styled from '@emotion/styled';
import Footer from 'components/common/Footer';
import CategoryList from 'components/main/CategoryList';
import PostList from 'components/main/PostList';
import { PostListType } from 'components/main/PostList/types';
import { IGatsbyImageData } from 'gatsby-plugin-image';

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
};

interface Props {
  data: {
    allMarkdownRemark: {
      edges: PostListType[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const IndexPage: React.FC<Props> = ({
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  return (
    <Container>
      <GlobalStyle />
      <Introdution profileImg={gatsbyImageData} />
      <CategoryList seletedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList posts={edges} />
      <Footer />
    </Container>
  );
};
export default IndexPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`;
