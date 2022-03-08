import { useState, useRef, useEffect } from 'react';
import debounce from 'utils/debounce';

const FULL_PAGES = ['About', 'Project', 'Blog', 'Contact'];

const useFullPage = ({ maxPageCount }: { maxPageCount: number }) => {
  const outerRef = useRef<any>();
  const pageCount = useRef(maxPageCount);
  const currentPage = useRef(0);
  const [currentPageName, setCurrentPageName] = useState<string>(FULL_PAGES[currentPage.current]);

  const scrollToCurrentPage = () => {
    outerRef.current.scrollTo({
      top: window.innerHeight * currentPage.current,
      left: 0,
      behavior: 'smooth',
    });
  };

  const scrollDown = () => {
    currentPage.current += 1;
    scrollToCurrentPage();
    setCurrentPageName(FULL_PAGES[currentPage.current]);
  };

  const scrollUp = () => {
    currentPage.current -= 1;
    scrollToCurrentPage();
    setCurrentPageName(FULL_PAGES[currentPage.current]);
  };

  useEffect(() => {
    const wheelHandler = debounce((e: WheelEvent) => {
      e.preventDefault();

      const { deltaY } = e;

      if (deltaY > 0 && currentPage.current < pageCount.current) {
        scrollDown();
      } else if (deltaY < 0 && currentPage.current > 0) {
        scrollUp();
      }
    }, 50);

    outerRef.current?.addEventListener('wheel', wheelHandler);

    return () => {
      outerRef.current?.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', scrollToCurrentPage);

    return () => {
      window.removeEventListener('resize', scrollToCurrentPage);
    };
  });

  const onClickNavBar = (e: React.MouseEvent<HTMLElement>) => {
    const {
      currentTarget: { innerText },
    } = e;
    currentPage.current = FULL_PAGES.indexOf(innerText);
    scrollToCurrentPage();
    setCurrentPageName(innerText);
  };

  return [outerRef, currentPageName, onClickNavBar];
};

export default useFullPage;
