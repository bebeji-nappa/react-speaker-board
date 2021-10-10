import * as React from "react";
import "./types"

const alignValue = [
  "left",
  "center",
  "right"
]

const sizeValue = [
  "xsmall",
  "small",
  "medium",
  "large",
  "xlarge",
  "xxlarge",
  "xxxlarge",
]

const Content:React.VFC<ContentProps> = ({children, align = "left", size = "medium"}) => {
  return (
    <div className={`Content${alignValue.includes(align) && align ? ` ${align}` : ""}${sizeValue.includes(size) && size ? ` size-${size}` : ""}`}>{children}</div>
  )
}

export default Content
