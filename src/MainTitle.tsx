import React from "react";

export const MainTitle:React.VFC<MainTitleProps> = ({children, textAlign = "left", size = "xxxlarge"}) => {
  return (
    <h1 className={`MainTitle${textAlign && ` ${textAlign}`}${size && ` size-${size}`}`}>{children}</h1>
  )
}
