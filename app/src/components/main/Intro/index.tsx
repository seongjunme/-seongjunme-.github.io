import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { Container, ProfileImage } from './style';

interface Props {
  image: IGatsbyImageData;
}

const Intro: React.FC<Props> = ({ image }) => {
  return (
    <Container>
      <ProfileImage image={image} alt="Profile Image" />
      <h2>"안녕하세요"</h2>
    </Container>
  );
};

export default Intro;
