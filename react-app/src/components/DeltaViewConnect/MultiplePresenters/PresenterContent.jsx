import PresenterSwitcher from "./PresenterSwitcher";

const PresenterContent = ({
  presenters,
  currentPresenter,
  onPresenterChange,
}) => {
  return (
    <div className="presenter-content">
      <h4 className="ais-hero-title-connect mb-15 tp_fade_anim" data-delay=".5">
        Multiple presenters.
        Minimum fuss
        </h4>

      

      <p className="presenter-description">
        Streamline your collaboration experience effortlessly with DeltaView.
        Multiple presenters seamlessly take the spotlight, ensuring dynamic
        interactions with minimum fuss. Elevate your meetings without the
        hassle, achieving maximum impact with smooth, coordinated
        presentations.
      </p>

      <PresenterSwitcher
        presenters={presenters}
        currentPresenter={currentPresenter}
        onPresenterChange={onPresenterChange}
      />
    </div>
  );
};

export default PresenterContent;