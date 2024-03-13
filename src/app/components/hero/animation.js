export const slideUp = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
};
export const slideImage = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1], delay: 0.3 },
  },
};

export const description = {
  initial: {
    y: 30,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1], delay: 0.3 },
  },
};
