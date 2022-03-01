import React from 'react';
import ProfileImage from '../ProfileImage';
import { Background, Wrapper, SubTitle, Title } from './style';

const Introdution = () => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage />
        <div>
          <SubTitle>Nice To Meet You,</SubTitle>
          <Title>HA HA HA HA HA HA HA HA HA HA !!</Title>
        </div>
      </Wrapper>
    </Background>
  );
};

export default Introdution;
