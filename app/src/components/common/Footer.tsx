import React from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 3.125rem 0;
  font-size: 0.9375rem;
  text-align: center;
  line-height: 1.5;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day.
      <br />@ 2022 Developer Jun, Powerd By Gatsby.
    </FooterWrapper>
  );
};

export default Footer;
