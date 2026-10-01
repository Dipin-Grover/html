import React from "react";

const DisplayMarquee = () => {
  const uses = ['Work presentations', 'Creative projects', 'Team meetings', 'Classrooms', 'Brainstorming', 'Video calls'];
  const items = [...uses, ...uses];

  return (
    <div className="dv-displays-mq" aria-hidden="true">
      <div className="dv-displays-track" id="track">
        {items.map((u, i) => (
          <span key={i}>{u}</span>
        ))}
      </div>
    </div>
  );
};

export default DisplayMarquee;
