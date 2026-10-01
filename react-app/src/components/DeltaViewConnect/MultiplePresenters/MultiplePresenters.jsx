import { useEffect, useRef, useState } from "react";
import PresenterContent from "./PresenterContent";
import PresenterVisual from "./PresenterVisual";

const presenters = [
  {
    name: "Aino",
    initial: "A",
  },
  {
    name: "Maya",
    initial: "M",
  },
];

const MultiplePresenters = () => {
  const frameRef = useRef(null);
  const tiltRef = useRef(null);

  const [currentPresenter, setCurrentPresenter] = useState(0);

  const prefersReducedMotion = useRef(
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const handlePresenterChange = (index) => {
    setCurrentPresenter(index);
  };

  useEffect(() => {
    if (prefersReducedMotion.current) return;

    const interval = setInterval(() => {
      setCurrentPresenter((current) => (current === 0 ? 1 : 0));
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    const tilt = tiltRef.current;

    if (!frame || !tilt || prefersReducedMotion.current) return;

    const restTransform = "rotateY(-7deg) rotateX(3deg)";

    tilt.style.transform = restTransform;

    const handlePointerMove = (event) => {
      const rect = frame.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      tilt.style.transform = `
        rotateY(${(x - 0.5) * 14}deg)
        rotateX(${(0.5 - y) * 10}deg)
      `;

      tilt.style.setProperty("--gx", `${x * 100}%`);
      tilt.style.setProperty("--gy", `${y * 100}%`);
    };

    const handlePointerLeave = () => {
      tilt.style.transform = restTransform;
    };

    frame.addEventListener("pointermove", handlePointerMove);
    frame.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      frame.removeEventListener("pointermove", handlePointerMove);
      frame.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section
      className={`multiple-presenters-stage ${
        currentPresenter === 1 ? "presenter-maya" : ""
      }`}
    >
      <PresenterContent
        presenters={presenters}
        currentPresenter={currentPresenter}
        onPresenterChange={handlePresenterChange}
      />

      <PresenterVisual
        frameRef={frameRef}
        tiltRef={tiltRef}
        presenter={presenters[currentPresenter]}
      />
    </section>
  );
};

export default MultiplePresenters;