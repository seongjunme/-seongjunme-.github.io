import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { SubTitle, Title } from './style';
import { Container, ProfileImage } from './style';

interface Props {
  image: IGatsbyImageData;
}

const Intro: React.FC<Props> = ({ image }) => {
  return (
    <Container>
      <ProfileImage image={image} alt="Profile Image" />
      <SubTitle>"안녕하세요."</SubTitle>
      <Title>"어쩌구 저쩌구로 어찌저찌 하는 개발자입니다."</Title>
      <Title>"어쩌구 저쩌구로 어찌저찌 하는 개발자입니다."</Title>
      <Title>"어쩌구 저쩌구로 어찌저찌 하는 개발자입니다."</Title>
      {/* <h2>"안녕하세요"</h2> */}
    </Container>
  );
};

export default Intro;
