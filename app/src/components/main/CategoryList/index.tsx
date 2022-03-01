import React from 'react';
import { Wrapper } from './style';
import CategoryItem from './CategoryItem';

interface Props {
  seletedCategory: string;
  categoryList: {
    [key: string]: number;
  };
}

const CategoryList: React.FC<Props> = ({ seletedCategory, categoryList }) => {
  return (
    <Wrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem to={`/?category=${name}`} activate={name === seletedCategory} key={name}>
          #{name}({count})
        </CategoryItem>
      ))}
    </Wrapper>
  );
};

export default CategoryList;
