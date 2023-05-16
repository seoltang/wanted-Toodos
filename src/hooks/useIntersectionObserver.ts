import { useEffect, useState } from 'react';

const useIntersectionObserver = (onIntersect: IntersectionObserverCallback) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root: null, threshold: 1.0 },
    );

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [onIntersect, target]);

  return { setTarget };
};

export default useIntersectionObserver;
