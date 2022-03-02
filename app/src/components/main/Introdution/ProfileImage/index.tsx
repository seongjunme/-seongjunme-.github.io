import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ImageWrapper } from './style';

interface Props {
  profileImg: IGatsbyImageData;
}

const ProfileImage: React.FC<Props> = ({ profileImg }) => {
  return <ImageWrapper image={profileImg} alt="profile" />;
};

export default ProfileImage;
