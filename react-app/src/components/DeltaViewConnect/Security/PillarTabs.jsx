import { PILLARS } from './data';

/** The three big words. Each one is a control, and its progress line advances the demo when it fills. */
export default function PillarTabs({ mode, manual, onSelect, onProgressEnd }) {
  return (
    <div className={`tabs${manual ? ' manual' : ''}`} role="tablist" aria-label="Security pillars">
      {PILLARS.map(({ id, word }) => (
        <button
          key={id}
          type="button"
          role="tab"
          aria-selected={mode === id}
          className={`tab${mode === id ? ' on' : ''}`}
          onClick={() => onSelect(id)}
          onPointerEnter={(e) => e.pointerType === 'mouse' && onSelect(id)}
        >
          {word}
          <i onAnimationEnd={onProgressEnd} />
        </button>
      ))}
    </div>
  );
}
