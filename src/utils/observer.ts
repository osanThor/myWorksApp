const Observer = (
  targetRef: React.RefObject<HTMLDivElement | HTMLLIElement>,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const targetCurrent = targetRef.current;
  let observer: IntersectionObserver;
  if (!targetCurrent) return;
  observer = new IntersectionObserver(
    ([e]) => {
      const target = e.target as HTMLElement;
      if (e.isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    },
    { threshold: 0.5 },
  );
  observer.observe(targetCurrent as Element);
};

export default Observer;
