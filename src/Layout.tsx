import * as React from "react";
import "./types"

const Layout: React.VFC<LayoutProps> = ({ children, layout }) => {
  return (
    <div className={`board ${layout}`}>
      {children}
    </div>
  )
}

export default Layout
