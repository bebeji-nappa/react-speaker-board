import React from "react";
import "../styles/MainTitle.css"

export const MainTitle:React.VFC<MainTitleProps> = ({children, textAlign = "left"}) => {
  return (
    <h1 className={`MainTitle${textAlign && ` ${textAlign}`}`}>{children}</h1>
  )
}
