import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import GlobalStyle from 'components/common/GlobalStyle';
import Introdution from 'components/main/Introdution';
import styled from '@emotion/styled';
import Footer from 'components/common/Footer';
import CategoryList from 'components/main/CategoryList';
import PostList from 'components/main/PostList';
import { PostListType } from 'components/main/PostList/types';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import queryString, { ParsedQuery } from 'query-string';
import { CategoryListType } from 'components/main/CategoryList/types';

interface Props {
  location: {
    search: string;
  };
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
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  const { category }: ParsedQuery<string> = queryString.parse(search);
  const seletedCategory: string = !category || typeof category !== 'string' ? 'All' : category;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListType['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          },
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) {
              list[category] = 1;
              list['All'] += 1;
            } else {
              list[category] += 1;
            }
          });
          return list;
        },
        { All: 0 },
      ),
    [],
  );

  return (
    <Container>
      <GlobalStyle />
      <Introdution profileImg={gatsbyImageData} />
      <CategoryList seletedCategory={seletedCategory} categoryList={categoryList} />
      <PostList posts={edges} selectedCategory={seletedCategory} />
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
          fields {
            slug
          }
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
