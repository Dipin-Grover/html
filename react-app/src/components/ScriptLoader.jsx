import React, { useEffect } from 'react';

const ScriptLoader = () => {
  useEffect(() => {
    // List of scripts exactly as they appear in the original template
    const scripts = [
      "/assets/js/vendor/jquery.js",
      "/assets/js/bootstrap-bundle.js",
      "/assets/js/plugin.js",
      "/assets/js/three.js",
      "/assets/js/hover-effect.umd.js",
      "/assets/js/split-type.js",
      "/assets/js/swiper-bundle.js",
      "/assets/js/swiper-gl.js",
      "/assets/js/effect-slicer.js",
      "/assets/js/magnific-popup.js",
      "/assets/js/nice-select.js",
      "/assets/js/purecounter.js",
      "/assets/js/isotope-pkgd.js",
      "/assets/js/imagesloaded-pkgd.js",
      "/assets/js/backtop.js",
      "/assets/js/ajax-form.js",
      "/assets/js/slider-init.js",
      "/assets/js/main.js",
      "/assets/js/tp-cursor.js"
    ];

    // Function to load a script sequentially
    const loadScript = (index) => {
      if (index >= scripts.length) return;

      const script = document.createElement('script');
      script.src = scripts[index];
      script.async = false; // Ensure execution order
      
      script.onload = () => {
        loadScript(index + 1);
      };
      
      script.onerror = () => {
        console.error(`Failed to load script: ${scripts[index]}`);
        loadScript(index + 1);
      };

      document.body.appendChild(script);
    };

    // Delay script loading slightly to ensure React has flushed all DOM changes
    const timer = setTimeout(() => {
      loadScript(0);
    }, 100);

    return () => {
      clearTimeout(timer);
      // We don't remove the scripts on unmount because the user wants an exact copy,
      // and removing them could break global event listeners bound by main.js.
    };
  }, []);

  return null;
};

export default ScriptLoader;
