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

const Title:React.VFC<TitleProps> = ({children, textAlign = "left", textSize = "xxxlarge"}) => {
  return (
    <h1 
      className={
        `SectionTitle${alignValue.includes(textAlign) && textAlign ? ` ${textAlign}` : ""}${sizeValue.includes(textSize) && textSize ? ` size-${textSize}` : "xxxlarge"}`
      }
    >
      {children}
    </h1>
  )
}

export default Title
