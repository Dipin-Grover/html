import TileGrid from './Tiles';

export default function WallDisplay({ active, status, layout, replayKey, onSelect }) {
  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect('display'); }
  };
  return (
    <div
      className={`disp${active ? ' is-on' : ''}`}
      data-anchor="display"
      role="button"
      tabIndex={0}
      aria-pressed={active}
      aria-label="Control from the display"
      onClick={() => onSelect('display')}
      onKeyDown={onKeyDown}
    >
      <div className="strip"><span>Boardroom 4</span><em>{status}</em></div>
      <TileGrid key={replayKey} layout={layout} />
    </div>
  );
}
