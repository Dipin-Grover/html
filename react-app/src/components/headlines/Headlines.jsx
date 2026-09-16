import React, { useEffect } from "react";
import HeadlinesIntro from "./HeadlinesIntro";
import HeadlineGrid from "./HeadlineGrid";

const Headlines = () => {

  useEffect(() => {
    /*
     * The original theme JS is loaded globally.
     *
     * main.js / plugin.js handle the theme's
     * scroll, parallax and animation behavior.
     *
     * We intentionally don't recreate those effects
     * with custom CSS or React animations.
     */

    if (window.$) {
      // Give the theme scripts a chance to initialize
      // after React has rendered the DOM.
      window.dispatchEvent(new Event("load"));
    }
  }, []);

  return (
    <div id="smooth-content">
      <main>

        <div className="tp-team-area pt-50 pb-50">
          <div className="container">
            <div className="row">

              <HeadlinesIntro />

              <HeadlineGrid />

            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Headlines;