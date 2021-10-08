import React from "react";
import "../styles/Content.css"

export const Content:React.VFC<ContentProps> = ({children, align = "left", size = "medium"}) => {
  return (
    <div className={`MainContent${align && ` ${align}`}${size && ` size-${size}`}`}>{children}</div>
  )
}
