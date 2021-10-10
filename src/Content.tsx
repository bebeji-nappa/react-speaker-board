import React from "react";

export const Content:React.VFC<ContentProps> = ({children, align = "left", size = "medium"}) => {
  return (
    <div className={`Content${align && ` ${align}`}${size && ` size-${size}`}`}>{children}</div>
  )
}
