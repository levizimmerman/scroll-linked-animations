import React from "react";
import { Link, useLocation } from "react-router-dom";

import SidebarContext from "../../context/Sidebar";
import routes from "../../routes";
import "./Navigation.css";

const Navigation = () => {
  const { open, setOpen } = React.useContext(SidebarContext);
  const { pathname } = useLocation();

  return (
    <nav
      className={`fixed left-0 p-6 top-0 bg-purple-50 bottom-0 w-60 shadow transform transition-transform z-10 ${
        open ? "transform-none" : "-translate-x-56"
      }`}
    >
      <h1 className="uppercase font-medium text-xl mb-6">
        Scroll-Linked Animations in CSS
      </h1>
      <button
        className="absolute -right-3 top-8 w-6 bg-purple-200 rounded-full text-purple-500 hover:text-white hover:bg-purple-500"
        onClick={() => setOpen(!open)}
      >
        {open ? "«" : "»"}
      </button>
      <ul>
        {routes.map((example) => (
          <li key={example.url}>
            <Link
              className={`p-2 -mx-2 block hover:bg-purple-500 hover:text-white rounded ${
                pathname === example.url ? "text-purple-500" : ""
              }`}
              to={example.url}
            >
              {example.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
