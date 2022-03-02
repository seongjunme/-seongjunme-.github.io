import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import ProfileImage from './ProfileImage';
import { Background, Wrapper, SubTitle, Title } from './style';

interface Props {
  profileImg: IGatsbyImageData;
}

const Introdution: React.FC<Props> = ({ profileImg }) => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImg={profileImg} />
        <div>
          <SubTitle>Nice To Meet You,</SubTitle>
          <Title>HA HA HA HA HA HA HA HA HA HA !!</Title>
        </div>
      </Wrapper>
    </Background>
  );
};

export default Introdution;
