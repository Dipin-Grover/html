import { useEffect, useRef, useState } from 'react';

/**
 * The "You" lens: tours the sensitive fields on its own, follows the pointer when the visitor moves it,
 * and reports which fields it currently covers (`seen[i]`).
 */
export default function useLens(screenRef, lensRef, active) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [free, setFree] = useState(false);
  const [seen, setSeen] = useState([]);
  const step = useRef(0);
  const fields = () => [...screenRef.current.querySelectorAll('.s')];

  // automatic tour
  useEffect(() => {
    if (!active || free) return;
    const go = () => {
      const list = fields(), t = list[step.current++ % list.length].getBoundingClientRect();
      const r = screenRef.current.getBoundingClientRect();
      setPos({ x: t.left - r.left + t.width / 2, y: t.top - r.top + t.height / 2 });
    };
    go();
    const id = setInterval(go, 1400);
    return () => clearInterval(id);
  }, [active, free]);

  // which fields is the lens over?
  useEffect(() => {
    if (!active) return;
    let raf;
    const tick = () => {
      const c = lensRef.current.getBoundingClientRect(), cx = c.left + c.width / 2, cy = c.top + c.height / 2;
      const next = fields().map((el) => {
        const r = el.getBoundingClientRect();
        return Math.abs(cx - (r.left + r.width / 2)) < r.width / 2 + 36 && Math.abs(cy - (r.top + r.height / 2)) < 34;
      });
      setSeen((prev) => (prev.join() === next.join() ? prev : next));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); setSeen([]); };
  }, [active]);

  const handlers = {
    onPointerMove: (e) => {
      if (!active) return;
      const r = screenRef.current.getBoundingClientRect();
      setFree(true);
      setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    },
    onPointerLeave: () => setFree(false),
  };

  return { pos, free, seen, handlers };
}
