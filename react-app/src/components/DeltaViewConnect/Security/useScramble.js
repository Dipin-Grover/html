import { useEffect, useMemo, useState } from 'react';

const GLYPHS = '0123456789abcdef';
const rand = () => GLYPHS[(Math.random() * 16) | 0];
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Returns `plain` or a same-length hex cipher, scrambling character by character between the two. */
export default function useScramble(plain, encrypted) {
  const cipher = useMemo(() => [...plain].map((c) => (c === ' ' ? ' ' : rand())).join(''), [plain]);
  const [text, setText] = useState(plain);

  useEffect(() => {
    const to = encrypted ? cipher : plain;
    if (reduced()) { setText(to); return; }
    const ms = encrypted ? 900 : 450, t0 = performance.now() + (encrypted ? 350 : 0);
    let raf;
    const step = (t) => {
      const p = Math.max(0, (t - t0) / ms);
      if (p >= 1) return setText(to);
      setText([...to].map((c, i) => (c === ' ' ? ' ' : i / to.length < p ? c : rand())).join(''));
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [encrypted, plain, cipher]);

  return text;
}
