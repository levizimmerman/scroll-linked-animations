import React from "react";

import "./SupportWarning.css";

const SupportWarning = () => (
  <div className="SupportWarning p-4 bg-yellow-200 sticky top-0 z-20 text-center shadow">
    <p>
      ⚠️ Your browser does not support CSS Scroll-Linked Animations, so this
      demo won't work. If you're feeling adventurous use Chrome 89 with
      “Experimental Web Platform Features” enabled.
    </p>
  </div>
);

export default SupportWarning;
