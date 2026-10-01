import { useRef } from 'react';
import ProtocolPanel from './ProtocolPanel';
import SensitiveValue from './SensitiveValue';
import { FIELDS } from './data';
import useLens from './useLens';

export default function DocumentScreen({ mode }) {
  const screenRef = useRef(null);
  const lensRef = useRef(null);
  const { pos, free, seen, handlers } = useLens(screenRef, lensRef, mode === 'private');
  let s = -1; // index among sensitive fields

  return (
    <div className="screen" ref={screenRef} {...handlers}>
      <div className="dots"><u /><u /><u /></div>
      <div className="doc">
        <h5>Board minutes, Q3 <span>Confidential</span></h5>
        {FIELDS.map((f) => {
          const i = f.sensitive ? ++s : -1;
          return (
            <div className="row" key={f.label}>
              <small>{f.label}</small>
              {f.sensitive
                ? <SensitiveValue plain={f.value} encrypted={mode === 'secure'} seen={!!seen[i]} />
                : <span>{f.value}</span>}
            </div>
          );
        })}
      </div>
      <div className={`scan${mode === 'secure' ? ' go' : ''}`} />
      <div ref={lensRef} className={`lens${free ? ' free' : ''}`}
           style={{ transform: `translate(${pos.x - 48}px, ${pos.y - 48}px)` }} />
      <ProtocolPanel run={mode === 'compliant'} />
    </div>
  );
}
