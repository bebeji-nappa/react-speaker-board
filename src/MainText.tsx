import React from "react";
import "../styles/MainText.css"

export const MainText:React.VFC<MainTextProps> = ({children, textAlign = "left", size = "medium"}) => {
  return (
    <div className={`MainText${textAlign && ` ${textAlign}`}${size && ` size-${size}`}`}>{children}</div>
  )
}
