import React from "react";
import "../styles/MainContent.css"

export const MainContent:React.VFC<MainContentProps> = ({children, textAlign = "left", size = "medium"}) => {
  return (
    <div className={`MainContent${textAlign && ` ${textAlign}`}${size && ` size-${size}`}`}>{children}</div>
  )
}
