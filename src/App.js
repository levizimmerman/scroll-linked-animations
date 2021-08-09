import React from "react";
import { Route, Switch } from "react-router-dom";

import Content from "./components/Content/Content";
import Navigation from "./components/Navigation/Navigation";
import SidebarContext from "./context/Sidebar";
import SupportWarning from "./components/SupportWarning/SupportWarning";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <main>
      <SupportWarning />
      <Navigation />
      <Content>
        <Switch>
          {routes.map((route) => (
            <Route key={route.url} path={route.url}>
              {route.component}
            </Route>
          ))}
          <Route path="/">{routes[0].component}</Route>
        </Switch>
      </Content>
    </main>
  );
}

const WithSidebar = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      <App />
    </SidebarContext.Provider>
  );
};

export default WithSidebar;
