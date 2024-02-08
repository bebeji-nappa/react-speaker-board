import React from "react";
import "./types";

const Circle: React.FC<FigureProps> = ({
  children,
  color = "black",
  width = "100",
  height = "100",
  borderColor = "white",
  borderWidth = "0",
}) => {
  return (
    <>
      {children ? (
        <div
          className="circle"
          style={{
            backgroundColor: color,
            width: `${width}px`,
            height: `${height}px`,
            border: `solid ${borderWidth}px ${borderColor}`,
          }}
        >
          {children}
        </div>
      ) : (
        <div
          className="circle"
          style={{
            backgroundColor: color,
            width: `${width}px`,
            height: `${height}px`,
            border: `solid ${borderWidth}px ${borderColor}`,
          }}
        ></div>
      )}
    </>
  );
};

export default Circle;
