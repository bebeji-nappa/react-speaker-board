import React from "react";
import "../types";

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
      className={`Content${layout ? ` content-layout-${layout}` : ""}${
        horizontal ? ` horizontal-${horizontal}` : ""
      }${vertical ? ` vertical-${vertical}` : ""}${textSize ? ` size-${textSize}` : ""}`}
      style={{ width: width, height: height, gap: `${gap}` }}
    >
      {children}
    </div>
  );
};

export default Content;
