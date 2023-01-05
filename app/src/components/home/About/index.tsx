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
      <Title>"프론트엔드를 사랑하는"</Title>
      <Title>"주니어 개발자입니다."</Title>
    </Container>
  );
};

export default Intro;
