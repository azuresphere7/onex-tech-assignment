import { Variants } from "framer-motion";

// Fade-in up framer motion variant
export const fadeSmallUpVariant = (duration: number = 0.5, delay: number = 0) => {
  const variant: Variants = {
    hide: {
      opacity: 0,
      y: 32,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
      },
    },
  };

  return variant;
};

// Fade-in left framer motion variant
export const fadeSmallLeftVariant = (duration: number = 0.5, delay: number = 0) => {
  const variant: Variants = {
    hide: {
      opacity: 0,
      x: 32,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        delay,
      },
    },
  };

  return variant;
};