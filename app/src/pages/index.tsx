import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/common/GlobalStyle';
import About from 'components/home/About';
import { graphql } from 'gatsby';
import { PostListType } from 'types/post.types';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import NavBar from 'components/home/NavBar';
import Contact from 'components/home/Contact';
import PostList from 'components/home/PostList';
import useFullPage from 'hooks/useFullPage';

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

const Index: React.FC<Props> = ({
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  const { outerRef, currentPageName, onClickNavBar } = useFullPage({ maxPageCount: 3 });

  const projects = useMemo(
    () =>
      edges.filter(
        ({
          node: {
            frontmatter: { type },
          },
        }) => type === 'Project',
      ),
    [],
  );

  const blogs = useMemo(
    () =>
      edges.filter(
        ({
          node: {
            frontmatter: { type },
          },
        }) => type === 'Blog',
      ),
    [],
  );
  return (
    <Background ref={outerRef}>
      <NavBar currentPageName={currentPageName} onClickNavBar={onClickNavBar} />
      <About image={gatsbyImageData} />
      <PostList posts={projects} />
      <PostList posts={blogs} moreURL="/blog" />
      <Contact />
      <GlobalStyle />
    </Background>
  );
};

export default Index;

const Background = styled.div`
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;

  &::--webkit-scrollbar {
    display: none;
  }

  width: 100%;
  background-color: #121212;
  color: #ffffff;
`;

export const getData = graphql`
  query getData {
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
            type
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
