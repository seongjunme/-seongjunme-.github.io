import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import BlogList from 'components/blog/BlogList';
import { graphql, Link } from 'gatsby';
import { PostListType } from 'types/post.types';
import Layout from 'components/common/Layout';
import CategoryList from 'components/blog/CategoryList';
import { CategoryListType } from 'types/category.type';
import queryString, { ParsedQuery } from 'query-string';

interface Props {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: PostListType[];
    };
  };
}

const Blog: React.FC<Props> = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
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
              frontmatter: { categories, type },
            },
          },
        ) => {
          if (type !== 'Blog') return list;

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
    <Layout>
      <Back to="/">{'<'} Home</Back>
      <CategoryList seletedCategory={seletedCategory} categoryList={categoryList} />
      <BlogList
        posts={edges.filter(
          ({
            node: {
              frontmatter: { type },
            },
          }) => type === 'Blog',
        )}
        selectedCategory={seletedCategory}
      ></BlogList>
    </Layout>
  );
};

export default Blog;

const Back = styled(Link)`
  position: fixed;
  top: 4%;
  left: 3%;
`;

export const getPostData = graphql`
  query getPostData {
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
  }
`;
