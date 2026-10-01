import { useCallback, useEffect, useState } from 'react';
import { DEVICES, ORDER } from './data';

const initialLayouts = Object.fromEntries(Object.entries(DEVICES).map(([id, d]) => [id, d.layout]));

/** Owns all state: who has control, each device's layout preference, the baton in flight, and the autoplay demo. */
export default function useControlDemo(intervalMs = 4200) {
  const [current, setCurrent] = useState('display');
  const [layouts, setLayouts] = useState(initialLayouts);
  const [flight, setFlight] = useState(null);   // { from, to } while the baton travels
  const [manual, setManual] = useState(false);  // true once the visitor interacts

  const handoff = useCallback((to) => {
    if (flight || to === current) return;
    setFlight({ from: current, to });
  }, [flight, current]);

  const arrive = useCallback(() => {
    setCurrent(flight.to);
    setFlight(null);
  }, [flight]);

  const select = (id) => { setManual(true); handoff(id); };
  const setLayout = (layout) => { setManual(true); setLayouts((p) => ({ ...p, [current]: layout })); };

  // autoplay: pass control to the next device until the visitor takes over
  useEffect(() => {
    if (manual || flight) return;
    const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
    const t = setTimeout(() => handoff(next), intervalMs);
    return () => clearTimeout(t);
  }, [manual, flight, current, handoff, intervalMs]);

  return { current, layout: layouts[current], flight, manual, select, setLayout, arrive };
}
