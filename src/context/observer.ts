const Observer = (targetRef: React.RefObject<HTMLDivElement>) => {
  const targetCurrent = targetRef.current;
  let observer: IntersectionObserver;
  if (!targetCurrent) return;
  observer = new IntersectionObserver(
    ([e]) => {
      const target = e.target as HTMLElement;
      if (e.isIntersecting) {
        target.style.opacity = '1';
        target.style.transform = 'translateX(0)';
        target.classList.add('on');
      } else {
        target.style.opacity = '0';
        target.style.transform = 'translateX(-77px)';
        target.classList.remove('on');
      }
    },
    { threshold: 0.5 },
  );
  observer.observe(targetCurrent as Element);
};

export default Observer;
