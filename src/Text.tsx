import * as React from "react";
import "./types";

const alignValue = ["left", "center", "right"];

const sizeValue = ["xsmall", "small", "medium", "large", "xlarge", "xxlarge", "xxxlarge"];

const Text: React.VFC<TextProps> = ({ children, textAlign = "left", textSize = "medium" }) => {
  return (
    <p
      className={`Text${alignValue.includes(textAlign) && textAlign ? ` ${textAlign}` : ""}${
        sizeValue.includes(textSize) && textSize ? ` size-${textSize}` : "medium"
      }`}
    >
      {children}
    </p>
  );
};

export default Text;
