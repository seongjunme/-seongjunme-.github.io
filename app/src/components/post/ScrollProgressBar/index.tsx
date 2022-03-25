import React, { useEffect, useState } from 'react';
import { Container } from './style';

const ScrollProgressBar = () => {
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const updateScrollDepth = () =>
      setScrollDepth(
        Math.floor((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 * 100) / 100,
      );
    window.addEventListener('scroll', updateScrollDepth);

    return () => {
      window.removeEventListener('scroll', updateScrollDepth);
    };
  }, []);

  return (
    <Container>
      <div className="progress-bar" style={{ width: `${scrollDepth}%` }}></div>
    </Container>
  );
};

export default ScrollProgressBar;
