import * as React from "react";
import "./types";

const TriangleRight: React.VFC<TriangleProps> = ({ children, height, color = "black", size }) => {
  console.log(height);
  return (
    <>
      {children ? (
        <div
          className="triangle"
          style={{
            width: "0",
            height: "0",
            borderTop: `${size}px solid transparent`,
            borderBottom: `${size}px solid transparent`,
            borderLeft: `${height}px solid ${color}`,
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
            borderBottom: `${size}px solid transparent`,
            borderLeft: `${height}px solid ${color}`,
          }}
        ></div>
      )}
    </>
  );
};

export default TriangleRight;
