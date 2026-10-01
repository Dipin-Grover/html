const PresenterBadge = ({ presenter }) => {
  return (
    <div className="presenter-badge">
      <b>{presenter.initial}</b>

      <div>
        <span className="presenter-name">{presenter.name}</span>
        <span>is presenting</span>
      </div>
    </div>
  );
};

export default PresenterBadge;