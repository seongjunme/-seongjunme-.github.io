import { MutableRefObject, useState, useRef, useEffect, useCallback } from 'react';
import debounce from 'utils/debounce';

const PAGE_NAMES = ['About', 'Project', 'Blog', 'Contact'];

const useFullPage = ({ maxPageCount }: { maxPageCount: number }) => {
  const outerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const currentPage = useRef(0);
  const [currentPageName, setCurrentPageName] = useState<string>(PAGE_NAMES[currentPage.current]);

  const scrollToCurrentPage = useCallback(() => {
    outerRef.current?.scrollTo({
      top: window.innerHeight * currentPage.current,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  const scrollDown = useCallback(() => {
    currentPage.current += 1;
    scrollToCurrentPage();
    setCurrentPageName(PAGE_NAMES[currentPage.current]);
  }, []);

  const scrollUp = useCallback(() => {
    currentPage.current -= 1;
    scrollToCurrentPage();
    setCurrentPageName(PAGE_NAMES[currentPage.current]);
  }, []);

  useEffect(() => {
    const wheelHandler = debounce((e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;

      if (deltaY > 0 && currentPage.current < maxPageCount) {
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

  useEffect(() => {
    const setScreenSize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', setScreenSize);
  }, []);

  const onClickNavBar = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const {
      currentTarget: { innerText },
    } = e;
    currentPage.current = PAGE_NAMES.indexOf(innerText);
    scrollToCurrentPage();
    setCurrentPageName(innerText);
  }, []);

  return { outerRef, currentPageName, onClickNavBar };
};

export default useFullPage;
