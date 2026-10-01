import PresenterBadge from "./PresenterBadge";

const PresenterVisual = ({
  frameRef,
  tiltRef,
  presenter,
}) => {
  return (
    <div className="presenter-frame" ref={frameRef}>
      <div className="presenter-tilt" ref={tiltRef}>
        <div className="presenter-edge">
          <div className="presenter-shot">
            <img
              src="/assets/img/DeltaviewConnect/presenter.jpg"
              alt="Two colleagues presenting to a wall display in a meeting room"
            />

            <div className="presenter-dim presenter-dim-left" />
            <div className="presenter-dim presenter-dim-right" />

            <div className="presenter-beam presenter-beam-left" />
            <div className="presenter-beam presenter-beam-right" />

            <div className="presenter-glare" />
          </div>
        </div>

        <PresenterBadge presenter={presenter} />
      </div>
    </div>
  );
};

export default PresenterVisual;