import React from "react";
import "../../types";

const TriangleLeft: React.FC<TriangleProps> = ({
  children,
  height,
  color = "black",
  size = "100px",
}) => {
  return (
    <>
      {children ? (
        <div
          className="triangle"
          style={{
            width: "0",
            height: "0",
            borderTop: `${size} solid transparent`,
            borderRight: `${height} solid ${color}`,
            borderBottom: `${size} solid transparent`,
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
            borderTop: `${size} solid transparent`,
            borderRight: `${height} solid ${color}`,
            borderBottom: `${size} solid transparent`,
          }}
        ></div>
      )}
    </>
  );
};

export default TriangleLeft;
