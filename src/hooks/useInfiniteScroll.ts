import { useEffect, useRef } from 'react';

export const useInfiniteScroll = (callback: () => void, page: number) => {
  const targetRef = useRef(null);

  const observerOptions = {
    root: null,
    rootMargin: '10px',
    threshold: 0.5,
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      callback();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, [page]);

  return { targetRef };
};
