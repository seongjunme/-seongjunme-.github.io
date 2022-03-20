import { MutableRefObject, useState, useRef, useEffect, useMemo } from 'react';
import { PostListType } from 'types/post.types';

const POST_COUNT_BY_PAGE = 9;

const useInfiniteScroll = ({ posts, selectedCategory }: { posts: PostListType[]; selectedCategory: string }) => {
  const [page, setPage] = useState(1);
  const targetRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

  const filteredPosts = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }) => selectedCategory === 'All' || categories.includes(selectedCategory),
      ),
    [selectedCategory],
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      if (!entries[0].isIntersecting) return;

      setPage(prev => prev + 1);
      observer.disconnect();
    },
    {
      threshold: 1.0,
    },
  );

  useEffect(() => setPage(1), [selectedCategory]);

  useEffect(() => {
    if (
      !targetRef.current ||
      page * POST_COUNT_BY_PAGE >= filteredPosts.length ||
      targetRef.current.children.length <= 0
    )
      return;

    observer.observe(targetRef.current.children[targetRef.current.children.length - 1]);
  }, [page, selectedCategory]);

  return {
    targetRef,
    postsByPage: filteredPosts.slice(0, page * POST_COUNT_BY_PAGE),
  };
};

export default useInfiniteScroll;
