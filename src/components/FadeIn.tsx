import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

const VIEWPORT = { once: true, margin: "-60px 0px" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
}

/** Fades up from slightly below — the default for section headers, cards, and content blocks. */
export function FadeUp({ children, delay = 0, duration = 0.55, style }: Props) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <div style={style}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, ease: EASE, delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** Opacity-only reveal — for quotes, overlays, and elements where translation feels wrong. */
export function FadeIn({ children, delay = 0, duration = 0.6, style }: Props) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <div style={style}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={VIEWPORT}
      transition={{ duration, ease: "easeOut", delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** Slides in from the left — for left-column content in horizontal split layouts. */
export function SlideLeft({ children, delay = 0, duration = 0.65, style }: Props) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <div style={style}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, ease: EASE, delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** Slides in from the right — for right-column content in horizontal split layouts. */
export function SlideRight({ children, delay = 0, duration = 0.65, style }: Props) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <div style={style}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, ease: EASE, delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/**
 * Above-fold fade — uses `animate` instead of `whileInView`.
 * Use this for hero section elements that are always visible on page load.
 */
export function HeroFade({ children, delay = 0, duration = 0.6, style }: Props) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <div style={style}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: EASE, delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
