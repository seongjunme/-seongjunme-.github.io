import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

export const BackgroundImg = styled(GatsbyImage)`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);
`;
