import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { Wrapper, BackgroundImg } from './style';

interface Props {
  image: IGatsbyImageData;
}

const Header: React.FC<Props> = ({ image }) => {
  return (
    <Wrapper>
      <BackgroundImg image={image} alt="thumbnail" />
    </Wrapper>
  );
};

export default Header;
