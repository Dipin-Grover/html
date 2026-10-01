import { CHECKS } from './data';

const Tick = () => (
  <span className="tick">
    <svg viewBox="0 0 12 12"><path d="M2 6.5l2.6 2.6L10 3" /></svg>
  </span>
);

/** Slides in for "Compliant": checks tick off one by one, then a stamp lands. */
export default function ProtocolPanel({ run }) {
  return (
    <div className={`panel${run ? ' run' : ''}`}>
      <h6>Protocol checks</h6>
      <ul>
        {CHECKS.map((c) => <li key={c}><Tick />{c}</li>)}
      </ul>
      <div className="stamp">COMPLIANT</div>
    </div>
  );
}
