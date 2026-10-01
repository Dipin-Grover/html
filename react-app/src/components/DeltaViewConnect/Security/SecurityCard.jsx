import DocumentScreen from './DocumentScreen';
import ShieldBadge from './ShieldBadge';

export default function SecurityCard({ mode }) {
  return (
    <div className="card" data-mode={mode}>
      <ShieldBadge />
      <DocumentScreen mode={mode} />
    </div>
  );
}
