import { useReducedMotion, type Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Motion primitives shared across the DEV site.
 * Everything animates transform + opacity only, and collapses to a
 * no-op when the visitor prefers reduced motion.
 */
export const useMotionSafe = () => {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0, distance = 20): Variants => ({
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce ? { duration: 0 } : { duration: 0.6, delay, ease: EASE },
    },
  });

  const fadeScale = (delay = 0): Variants => ({
    hidden: reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: reduce ? { duration: 0 } : { duration: 0.5, delay, ease: EASE },
    },
  });

  const fadeDown = (delay = 0): Variants => ({
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: -16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce ? { duration: 0 } : { duration: 0.5, delay, ease: EASE },
    },
  });

  const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
    hidden: {},
    visible: {
      transition: reduce
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren, delayChildren },
    },
  });

  return { reduce, fadeUp, fadeDown, fadeScale, stagger };
};

export const viewportOnce = { once: true, amount: 0.25 } as const;
