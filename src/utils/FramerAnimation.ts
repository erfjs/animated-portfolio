const pageVariants = {
  init: {
    opacity: 0,
    y: '-100%',
  },
  anim: {
    opacity: 1,
    y: 0,
  },
  last: {
    opacity: 0,
    y: '-100%',
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1,
};

export { pageVariants, pageTransition };
