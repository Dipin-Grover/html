
import { useState } from 'react';

import { PILLARS } from './data';

const IDS = PILLARS.map((p) => p.id);

/** Which pillar is showing. Cycles automatically and can be changed by hover. */

export default function usePillars() {
  const [mode, setMode] = useState(IDS[0]);

  const select = (id) => {
    setMode(id);
  };

  const advance = () => {
    setMode((current) => {
      const index = IDS.indexOf(current);
      return IDS[(index + 1) % IDS.length];
    });
  };

  return {
    mode,
    select,
    advance,
  };
}

