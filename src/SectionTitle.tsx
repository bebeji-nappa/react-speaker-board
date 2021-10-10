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

const SectionTitle:React.VFC<SectionTitleProps> = ({children, textAlign = "left", size = "xlarge"}) => {
  return (
    <h2 
      className={
        `SectionTitle${alignValue.includes(textAlign) && textAlign ? ` ${textAlign}` : ""}${sizeValue.includes(size) && size ? ` size-${size}` : "xlarge"}`
      }
    >
      {children}
    </h2>
  )
}

export default SectionTitle
