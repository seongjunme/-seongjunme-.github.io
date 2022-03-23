import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.875rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const More = styled(Link)`
  position: absolute;
  top: -12%;
  right: 1%;
  font-size: 1rem;
`;
