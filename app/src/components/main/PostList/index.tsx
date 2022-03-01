import React from 'react';
import PostItem from './PostItem';
import { Wrapper } from './style';

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2020.01.29.',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail: 'https://avatars.githubusercontent.com/u/72444675?s=100&v=4',
  link: 'https://www.google.co.kr/',
};

const PostList = () => {
  return (
    <Wrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </Wrapper>
  );
};

export default PostList;
