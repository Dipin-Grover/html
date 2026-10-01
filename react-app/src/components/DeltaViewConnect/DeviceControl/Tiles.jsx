import { LAYOUTS } from './data';

function Tile({ id, title, className = '', children, bgImage }) {
  return (
    <div className={`tile ${className}`} style={{ 
      gridArea: id, 
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      ...(bgImage ? { 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '1px solid rgba(255,255,255,0.1)'
      } : {})
    }}>
      {bgImage && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8))', zIndex: 0 }} />}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', flex: 1 }}>
        <b style={{ opacity: bgImage ? 0.9 : 0.5, marginBottom: '12px', fontSize: '0.85rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{title}</b>
        {children}
      </div>
    </div>
  );
}

const RevenueTile = () => (
  <Tile id="revenue" title="Quarterly Revenue">
    <div className="metric" style={{ zIndex: 2, position: 'relative', display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
      <strong style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 'bold', lineHeight: 1 }}>$1.24M</strong>
      <span style={{ color: '#4ade80', fontSize: '0.85rem', fontWeight: 'bold', backgroundColor: 'rgba(74, 222, 128, 0.1)', padding: '2px 8px', borderRadius: '12px' }}>
        ↑ 12.8%
      </span>
    </div>

    <svg
      className="revenue-chart"
      viewBox="0 0 120 35"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: -5,
        left: -5,
        width: 'calc(100% + 10px)',
        height: '70%',
        zIndex: 1,
      }}
    >
      <defs>
        <linearGradient id="revenue-gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path
        fill="url(#revenue-gradient)"
        stroke="#4ade80"
        strokeWidth="1"
        d="M0 35 L0 30 C15 25 25 8 42 16 S70 34 88 18 S110 5 120 10 L120 35 Z"
      />
    </svg>
  </Tile>
);

const AgendaTile = () => (
  <Tile id="agenda" title="Today's Agenda" className="tile--agenda">
    <div className="agenda-item" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '12px', 
      marginTop: 'auto', 
      marginBottom: 'auto',
      backgroundColor: 'rgba(255,255,255,0.03)',
      padding: '12px',
      borderRadius: '8px',
      borderLeft: '3px solid #facc15'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '45px' }}>
        <span style={{ color: '#facc15', fontSize: '1rem', fontWeight: 'bold' }}>09:30</span>
        <span style={{ fontSize: '0.65rem', opacity: 0.5, textTransform: 'uppercase' }}>AM</span>
      </div>
      <p style={{ fontSize: '1.1rem', lineHeight: 1.3, margin: 0, fontWeight: '500' }}>
        Product<br />Review
      </p>
    </div>
  </Tile>
);

const CameraTile = () => (
  <Tile id="camera" title="Room Camera" className="tile--camera" bgImage="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop">
    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <div className="camera-status" style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 10px', borderRadius: '12px', backdropFilter: 'blur(4px)' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444', boxShadow: '0 0 8px #ef4444' }}></div>
        <span style={{ fontWeight: '600', fontSize: '0.75rem', letterSpacing: '0.5px' }}>REC</span>
      </div>
      <span className="camera-detail" style={{ opacity: 0.8, fontSize: '0.75rem', backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 8px', borderRadius: '6px' }}>4K · Wide</span>
    </div>
  </Tile>
);

const Avatar = ({ color, text }) => (
  <div style={{ 
    width: '28px', height: '28px', borderRadius: '50%', backgroundColor: color, 
    display: 'flex', alignItems: 'center', justifyContent: 'center', 
    fontSize: '0.7rem', fontWeight: 'bold', color: '#fff', border: '2px solid #1a1b26',
    marginLeft: '-8px'
  }}>{text}</div>
);

const RoomTile = () => (
  <Tile id="room" title="Participants" className="tile--room">
    <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      
      <div className="participants" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ display: 'flex', paddingLeft: '8px' }}>
          <Avatar color="#3b82f6" text="JD" />
          <Avatar color="#10b981" text="AM" />
          <Avatar color="#f59e0b" text="TR" />
          <Avatar color="#6366f1" text="+9" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <strong style={{ fontSize: '1.2rem', lineHeight: 1 }}>12</strong>
          <span style={{ opacity: 0.5, fontSize: '0.75rem' }}>in room</span>
        </div>
      </div>
      
      <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
      
      <div className="remote" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#a855f7' }}></div>
        <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>3 remote participants</span>
      </div>

    </div>
  </Tile>
);

const TILE_MAP = {
  revenue: RevenueTile,
  agenda: AgendaTile,
  camera: CameraTile,
  room: RoomTile,
};

export default function TileGrid({ layout }) {
  return (
    <div className={`tiles tiles--${layout}`}>
      {LAYOUTS[layout].tiles.map((id) => {
        const Component = TILE_MAP[id];
        return <Component key={id} />;
      })}
    </div>
  );
}