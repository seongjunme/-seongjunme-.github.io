import React from 'react';
import { Wrapper, Title, Info } from './style';

export interface Props {
  title: string;
  date: string;
  categories: string[];
}

const PostInfo: React.FC<Props> = ({ title, date, categories }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Info>
        <div>{date}</div>
        <div>{categories.join(' / ')}</div>
      </Info>
    </Wrapper>
  );
};

export default PostInfo;
