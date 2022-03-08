import React, { useRef, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/common/GlobalStyle';
import About from 'components/home/About';
import { graphql } from 'gatsby';
import { PostListType } from 'types/post.types';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import NavBar from 'components/home/NavBar';
import Contact from 'components/home/Contact';
import { FULL_PAGES } from 'utils';
import PostList from 'components/home/PostList';
import debounce from 'utils/debounce';

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
  const outerRef = useRef<any>();
  // const outerRef = useRef<HTMLDivElement>(null);
  const pageCount = useRef(3);
  const currentPage = useRef(0);
  const [currentPageName, setCurrentPageName] = useState(FULL_PAGES[currentPage.current]);

  const scrollToCurrentPage = () => {
    outerRef.current.scrollTo({
      top: window.innerHeight * currentPage.current,
      left: 0,
      behavior: 'smooth',
    });
  };

  const scrollDown = () => {
    currentPage.current += 1;
    scrollToCurrentPage();
    setCurrentPageName(FULL_PAGES[currentPage.current]);
  };

  const scrollUp = () => {
    currentPage.current -= 1;
    scrollToCurrentPage();
    setCurrentPageName(FULL_PAGES[currentPage.current]);
  };

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

  useEffect(() => {
    const wheelHandler = debounce((e: WheelEvent) => {
      e.preventDefault();

      const { deltaY } = e;

      if (deltaY > 0 && currentPage.current < pageCount.current) {
        scrollDown();
      } else if (deltaY < 0 && currentPage.current > 0) {
        scrollUp();
      }
    }, 50);

    outerRef.current?.addEventListener('wheel', wheelHandler);

    return () => {
      outerRef.current?.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', scrollToCurrentPage);

    return () => {
      window.removeEventListener('resize', scrollToCurrentPage);
    };
  });

  const onClickNavBar = (e: React.MouseEvent<HTMLElement>) => {
    const {
      currentTarget: { innerText },
    } = e;
    currentPage.current = FULL_PAGES.indexOf(innerText);
    scrollToCurrentPage();
    setCurrentPageName(innerText);
  };

  return (
    <Background ref={outerRef} className="outer">
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
