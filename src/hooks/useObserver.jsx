const elementList = [];

const observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    entry.target.classList.add('show');
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
    trackVisibility: true,
    delay: 100,
  },
);

const useObserver = () => {
  function observe() {
    elementList?.forEach((element) => observer.observe(element));
  }

  function addElements(elements) {
    elementList.push(...elements);
  }

  return {
    observe,
    addElements,
  };
};

export default useObserver;
