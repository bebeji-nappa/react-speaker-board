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

const MainTitle:React.VFC<MainTitleProps> = ({children, textAlign = "left", size = "xxxlarge"}) => {
  return (
    <h1 
      className={
        `SectionTitle${alignValue.includes(textAlign) && textAlign ? ` ${textAlign}` : ""}${sizeValue.includes(size) && size ? ` size-${size}` : "xxxlarge"}`
      }
    >
      {children}
    </h1>
  )
}

export default MainTitle
