import React from "react";
import "../../types";

const Square: React.FC<FigureProps> = ({
  children,
  color = "black",
  width = "100px",
  height = "100px",
  borderColor = "white",
  borderWidth = "0",
}) => {
  return (
    <>
      {children ? (
        <div
          className="square"
          style={{
            backgroundColor: color,
            width: `${width}`,
            height: `${height}`,
            border: `solid ${borderWidth} ${borderColor}`,
          }}
        >
          {children}
        </div>
      ) : (
        <div
          className="square"
          style={{
            backgroundColor: color,
            width: `${width}`,
            height: `${height}`,
            border: `solid ${borderWidth} ${borderColor}`,
          }}
        ></div>
      )}
    </>
  );
};

export default Square;
