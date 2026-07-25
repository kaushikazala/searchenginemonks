import { useEffect, useRef, useState } from 'react';
import useReducedMotion from './useReducedMotion.js';

/**
 * Reveals an element (fade + rise) once it scrolls into view.
 * Returns [ref, isVisible] — spread `isVisible` into a "is-visible" class
 * alongside the existing "reveal" / "reveal-delay-n" classes.
 */
export default function useReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReducedMotion, threshold, rootMargin]);

  return [ref, isVisible];
}
