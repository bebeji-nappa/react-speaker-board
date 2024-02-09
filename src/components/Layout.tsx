import React from "react";
import "../types";

const Layout: React.FC<LayoutProps> = ({ children, layout }) => {
  return <div className={`board ${layout}`}>{children}</div>;
};

export default Layout;
