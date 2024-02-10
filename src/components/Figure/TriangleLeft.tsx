import React from "react";
import "../../types";

const TriangleLeft: React.FC<TriangleProps> = ({
  children,
  height,
  color = "black",
  size = "100",
}) => {
  return (
    <>
      {children ? (
        <div
          className="triangle"
          style={{
            width: "0",
            height: "0",
            borderTop: `${size}px solid transparent`,
            borderRight: `${height}px solid ${color}`,
            borderBottom: `${size}px solid transparent`,
          }}
        >
          {children}
        </div>
      ) : (
        <div
          className="triangle"
          style={{
            width: "0",
            height: "0",
            borderTop: `${size}px solid transparent`,
            borderRight: `${height}px solid ${color}`,
            borderBottom: `${size}px solid transparent`,
          }}
        ></div>
      )}
    </>
  );
};

export default TriangleLeft;
