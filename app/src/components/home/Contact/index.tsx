import React from 'react';
import { Container, Content } from './style';
import Footer from 'components/common/Footer';

const Contact = () => {
  return (
    <Container>
      <Content>
        <div>Phone: 010-3292-7923</div>
        <div>Mail: sjman223@naver.com</div>
        <div>
          Github:
          <a href="https://github.com/seongjunme">https://github.com/seongjunme</a>
        </div>
      </Content>
      <Footer />
    </Container>
  );
};

export default Contact;
