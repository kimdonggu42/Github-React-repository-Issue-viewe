import { useEffect, useRef } from 'react';

export const useInfiniteScroll = (callback: () => void, page: any) => {
  const targetRef = useRef(null);

  const observerOptions = {
    root: null,
    rootMargin: '10px',
    threshold: 0.5,
  };

  const handleIntersection = (entries: any) => {
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
  }, [page.current]);

  return { targetRef };
};
