import { LAYOUTS } from './data';

export default function PreferencePanel({ deviceLabel, layout, onChange }) {
  return (
    <div className="pref">
      <h3>{deviceLabel} has control</h3>
      <p aria-live="polite">Layout preference: {LAYOUTS[layout].label}. {LAYOUTS[layout].hint}</p>
      <div className="chips" role="group" aria-label="Layout preference">
        {Object.entries(LAYOUTS).map(([id, l]) => (
          <button key={id} type="button" className="chip" aria-pressed={layout === id} onClick={() => onChange(id)}>
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}
