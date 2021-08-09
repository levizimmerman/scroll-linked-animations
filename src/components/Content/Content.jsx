import React from "react";

import SidebarContext from "../../context/Sidebar";

import "./Content.css";

const Content = ({ children }) => {
  const { open } = React.useContext(SidebarContext);
  return (
    <div
      className={`transform ${
        open ? "translate-x-60" : "translate-x-4"
      } transition-transform`}
    >
      {children}
    </div>
  );
};

export default Content;
