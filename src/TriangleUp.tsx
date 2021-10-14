import * as React from "react";
import "./types";

const TriangleUp: React.VFC<TriangleProps> = ({ children, height, color = "black", size }) => {
  return (
    <>
      {children ? (
        <div
          className="triangle"
          style={{
            width: "0",
            height: "0",
            borderRight: `${size}px solid transparent`,
            borderBottom: `${height}px solid ${color}`,
            borderLeft: `${size}px solid transparent`,
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
            borderRight: `${size}px solid transparent`,
            borderBottom: `${height}px solid ${color}`,
            borderLeft: `${size}px solid transparent`,
          }}
        ></div>
      )}
    </>
  );
};

export default TriangleUp;
