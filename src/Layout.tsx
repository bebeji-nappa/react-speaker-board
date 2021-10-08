import React from "react"
import "../styles/Layout.css"

export const Layout: React.VFC<LayoutProps> = ({ children, layout }) => {
  return (
    <div className={`board ${layout}`}>
      {children}
    </div>
  )
}
