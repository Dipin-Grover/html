import DeviceSeat from './DeviceSeat';
import { DEVICES } from './data';

const SEATS = Object.entries(DEVICES).filter(([id]) => id !== 'display');

export default function Room({ current, onSelect }) {
  return (
    <>
      
      <div className="table"></div>
      {SEATS.map(([id, d]) => (
        <DeviceSeat key={id} id={id} label={d.label} pos={d.pos} active={current === id} onSelect={onSelect} />
      ))}
    </>
  );
}
