import React from "react";
import "../types";

const horizontalValue = ["left", "center", "right"];

const verticalValue = ["up", "center", "down"];

const sizeValue = ["xsmall", "small", "medium", "large", "xlarge", "xxlarge", "xxxlarge"];

const Content: React.FC<ContentProps> = ({
  children,
  vertical = "up",
  horizontal = "left",
  textSize = "medium",
  width = "auto",
  height = "auto",
}) => {
  return (
    <div
      className={`Content${
        horizontalValue.includes(horizontal) && horizontal ? ` horizontal-${horizontal}` : ""
      }${verticalValue.includes(vertical) && vertical ? ` vertical-${vertical}` : ""}${
        sizeValue.includes(textSize) && textSize ? ` size-${textSize}` : ""
      }`}
      style={{ width: width, height: height }}
    >
      {children}
    </div>
  );
};

export default Content;
