export default function DeviceSeat({ id, label, pos, active, onSelect }) {
  return (
    <button
      type="button"
      className={`seat seat--${id}${active ? ' is-on' : ''}`}
      style={pos}
      aria-pressed={active}
      onClick={() => onSelect(id)}
    >
      <i data-anchor={id} />
      {label}
    </button>
  );
}
