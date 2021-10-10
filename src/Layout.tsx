import React from "react"

export const Layout: React.VFC<LayoutProps> = ({ children, layout }) => {
  return (
    <div className={`board ${layout}`}>
      {children}
    </div>
  )
}
