"use client";

import { useEffect, useRef, useState } from "react";

// Fades content in as it scrolls into view. Falls back to visible if IO is unavailable
// or reduced-motion is on (handled in CSS). ponytail: IntersectionObserver, no animation lib.
export default function Reveal({ children, as: Tag = "div", className = "", delay = 0, style }: {
  children?: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as any;
  return (
    <Comp ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`} style={{ ...(delay ? { transitionDelay: `${delay}ms` } : {}), ...style }}>
      {children}
    </Comp>
  );
}
