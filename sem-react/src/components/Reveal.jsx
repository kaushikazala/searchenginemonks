import useReveal from '../hooks/useReveal.js';

/**
 * Wraps any element with the scroll-reveal animation.
 * Usage: <Reveal delay={2} className="service-card">...</Reveal>
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, isVisible] = useReveal();

  const classes = [
    'reveal',
    delay ? `reveal-delay-${delay}` : '',
    isVisible ? 'is-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
