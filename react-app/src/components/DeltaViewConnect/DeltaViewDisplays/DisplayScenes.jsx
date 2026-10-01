
const AndroidRobot = () => {
  return (
    <svg
      className="android-robot"
      viewBox="0 0 100 70"
      fill="#3fdc97"
      aria-hidden="true"
    >
      <path
        d="M6 62a44 44 0 0 1 88 0z"
        transform="translate(0 -6)"
      />

      <circle
        cx="34"
        cy="44"
        r="4"
        fill="#03050a"
      />

      <circle
        cx="66"
        cy="44"
        r="4"
        fill="#03050a"
      />

      <path
        d="M24 12l8 12M76 12l-8 12"
        stroke="#3fdc97"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};


/* =========================================
   ANDROID SCENES
========================================= */

const AndroidScene = ({ type }) => {

  /* Android 16 */
  if (type === "android") {
    return (
      <div className="android-scene">

        <AndroidRobot />

        <b>16</b>

      </div>
    );
  }


  /* Digital whiteboard */
  if (type === "board") {
    return (
      <svg
        className="display-board"
        viewBox="0 0 200 112"
        aria-hidden="true"
      >
        <path
          className="draw-line"
          d="M20 84C50 20 80 104 112 52S172 34 182 74"
          fill="none"
          stroke="#5be3a1"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          className="draw-line-two"
          d="M30 96H170"
          fill="none"
          stroke="#7aa8ff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }


  /* Video call */
  if (type === "call") {
    const backgrounds = [
      "linear-gradient(135deg, #2b6cb0, #1a365d)",
      "linear-gradient(135deg, #2f855a, #1c4532)",
      "linear-gradient(135deg, #805ad5, #3c2a75)",
      "linear-gradient(135deg, #c05621, #652b19)",
    ];

    return (
      <div className="video-call-grid">

        {backgrounds.map((background, index) => (
          <i
            key={index}
            style={{
              "--scene-index": index,
              background,
            }}
          />
        ))}

      </div>
    );
  }

  return null;
};


/* =========================================
   WINDOWS SCENES
========================================= */

const WindowsScene = ({ type }) => {

  /* Windows 11 logo */
  if (type === "windows") {
    return (
      <div className="windows-logo">

        {[0, 1, 2, 3].map((index) => (
          <i
            key={index}
            style={{
              "--scene-index": index,
            }}
          />
        ))}

      </div>
    );
  }


  /* Analytics bars */
  if (type === "bars") {
    const heights = [
      45,
      70,
      55,
      88,
      65,
    ];

    return (
      <div className="display-bars">

        {heights.map((height, index) => (
          <i
            key={index}
            style={{
              "--bar-height": `${height}%`,
              "--scene-index": index,
            }}
          />
        ))}

      </div>
    );
  }


  /* Multiple windows */
  if (type === "wins") {
    return (
      <div className="display-windows">

        <i />
        <i />

      </div>
    );
  }

  return null;
};


/* =========================================
   MAIN DISPLAY SCENES
========================================= */

const DisplayScenes = ({
  os,
  sceneIndex,
}) => {

  const androidScenes = [
    "android",
    "board",
    "call",
  ];

  const windowsScenes = [
    "windows",
    "bars",
    "wins",
  ];

  const currentScenes =
    os === "android"
      ? androidScenes
      : windowsScenes;


  return (
    <>
      {currentScenes.map((scene, index) => (
        <div
          key={scene}
          className={`display-scene ${
            sceneIndex === index
              ? "active"
              : ""
          }`}
        >

          {os === "android" ? (
            <AndroidScene type={scene} />
          ) : (
            <WindowsScene type={scene} />
          )}

        </div>
      ))}
    </>
  );
};

export default DisplayScenes;
