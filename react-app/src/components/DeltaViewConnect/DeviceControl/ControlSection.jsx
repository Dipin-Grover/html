import { useRef } from 'react';
import Beam from './Beam';
import PreferencePanel from './PreferencePanel';
import Room from './Room';
import WallDisplay from './WallDisplay';
import { DEVICES } from './data';
import useControlDemo from './useControlDemo';

export default function ControlSection() {
  const stageRef = useRef(null);
  const { current, layout, flight, manual, select, setLayout, arrive } = useControlDemo();
  const label = DEVICES[current].label;
  const status = current === 'display' ? 'Controlled from the display' : `Controlled from ${label.toLowerCase()}`;

  return (
    <section className="ctrl">
      <div className="ctrl__wrap">
        <div className="stage" ref={stageRef}>
          
          <WallDisplay active={current === 'display'} status={status} layout={layout}
            replayKey={`${current}-${layout}`} onSelect={select} />
          <Room current={current} onSelect={select} />
          <Beam stageRef={stageRef} current={current} flight={flight} onArrive={arrive} />
        </div>

        <div className="copy">
          <h2 >Control from the display or your own device</h2>
          <p>Experience total control with the flexibility to command from the display or your personal device. Effortlessly navigate between devices, creating a dynamic and responsive environment tailored precisely to your preferences.</p>
          <PreferencePanel deviceLabel={label} layout={layout} onChange={setLayout} />
          <p className="try">{manual ? 'You are in control. Tap a device, then change its layout preference.' : 'Watching a demo. Tap any device to take control.'}</p>
        </div>
      </div>
    </section>
  );
}
