import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** SVG overlay: the dashed beam from the active device to the display, and the baton that hops between devices. */
export default function Beam({ stageRef, current, flight, onArrive }) {
  const [d, setD] = useState('');
  const ballRef = useRef(null);

  // centre of a [data-anchor] element, relative to the stage (bottom edge for the display)
  const point = useCallback((id) => {
    const root = stageRef.current;
    const r = root.querySelector(`[data-anchor="${id}"]`).getBoundingClientRect();
    const s = root.getBoundingClientRect();
    return { x: r.left - s.left + r.width / 2, y: (id === 'display' ? r.bottom : r.top + r.height / 2) - s.top };
  }, [stageRef]);

  const drawBeam = useCallback(() => {
    if (current === 'display') return setD('');
    const a = point(current), b = point('display');
    setD(`M${a.x} ${a.y} C${a.x} ${a.y - 110},${b.x} ${b.y + 110},${b.x} ${b.y}`);
  }, [current, point]);

  useLayoutEffect(() => {
    drawBeam();
    window.addEventListener('resize', drawBeam);
    document.fonts?.ready.then(drawBeam);
    return () => window.removeEventListener('resize', drawBeam);
  }, [drawBeam]);

  // baton travelling from one device to the next
  useEffect(() => {
    if (!flight) return;
    if (reduce()) { onArrive(); return; }
    const ball = ballRef.current, a = point(flight.from), b = point(flight.to), t0 = performance.now();
    let raf;
    ball.style.opacity = 1;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / 750);
      const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2, q = 1 - e;
      const mx = (a.x + b.x) / 2, my = Math.min(a.y, b.y) - 60;
      ball.setAttribute('cx', q * q * a.x + 2 * q * e * mx + e * e * b.x);
      ball.setAttribute('cy', q * q * a.y + 2 * q * e * my + e * e * b.y);
      if (p < 1) raf = requestAnimationFrame(step);
      else { ball.style.opacity = 0; onArrive(); }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [flight, onArrive, point]);

  return (
    <svg className="beam-svg" aria-hidden="true">
      <path className="beam" d={d} style={{ opacity: flight || !d ? 0 : 1 }} />
      <circle ref={ballRef} className="ball" r="7" />
    </svg>
  );
}
