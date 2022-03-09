import React from 'react';
import { Wrapper } from './style';

interface Props {
  html: string;
}

const PostContent: React.FC<Props> = ({ html }) => {
  return <Wrapper dangerouslySetInnerHTML={{ __html: html }}></Wrapper>;
};

export default PostContent;
