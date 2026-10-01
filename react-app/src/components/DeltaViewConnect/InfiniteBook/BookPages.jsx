export const Right = ({ s }) => (
  <div className="pg">
    <div
      className="im"
      style={{
        backgroundImage: `url("${s.image}")`,
      }}
    />
  </div>
);

export const Left = ({ s }) => (
  <div className={`pg pg--${s.theme}`}>
    <div className="pg-brand">DeltaView</div>
    <h2>{s.title}</h2>
    {s.sub && <div className="pg-sub">{s.sub}</div>}
    {s.stat && <div className="pg-stat">{s.stat}</div>}
    {s.text && <div className="pg-text">{s.text}</div>}
  </div>
);
