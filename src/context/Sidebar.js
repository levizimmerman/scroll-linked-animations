import React from "react";

const SidebarContext = React.createContext({ open: true, setOpen: () => {} });

export default SidebarContext;
