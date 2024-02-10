import React from "react";
import "../types";

const horizontalValue = ["left", "center", "right"];

const verticalValue = ["up", "center", "down"];

const sizeValue = ["xsmall", "small", "medium", "large", "xlarge", "xxlarge", "xxxlarge"];

const layoutValue = ["vertical", "horizontal"];

const Content: React.FC<ContentProps> = ({
  children,
  vertical = "up",
  horizontal = "left",
  textSize = "medium",
  width = "auto",
  height = "auto",
  layout = "vertical",
  gap = "0",
}) => {
  return (
    <div
      className={`Content${layoutValue.includes(layout) && layout ? ` content-layout-${layout}` : ""}${
        horizontalValue.includes(horizontal) && horizontal ? ` horizontal-${horizontal}` : ""
      }${verticalValue.includes(vertical) && vertical ? ` vertical-${vertical}` : ""}${
        sizeValue.includes(textSize) && textSize ? ` size-${textSize}` : ""
      }`}
      style={{ width: width, height: height, gap: `${gap}px` }}
    >
      {children}
    </div>
  );
};

export default Content;
