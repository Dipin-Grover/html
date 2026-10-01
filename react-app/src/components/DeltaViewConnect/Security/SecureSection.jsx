import Lead from './Lead';
import PillarTabs from './PillarTabs';
import SecurityCard from './SecurityCard';
import { PILLARS } from './data';
import usePillars from './usePillars';

export default function SecureSection() {
  const { mode, manual, select, advance } = usePillars();
  const caption = PILLARS.find((p) => p.id === mode).caption;

  return (
    <section className="sp">
      <div className="wrap">
        <div className="copy">
          <PillarTabs mode={mode} manual={manual} onSelect={select} onProgressEnd={advance} />
          <Lead mode={mode} />
          <p className="cap" aria-live="polite">{caption}</p>
        </div>
        <SecurityCard mode={mode} />
      </div>
    </section>
  );
}
