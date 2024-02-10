import React from "react";
import "../../types";

const TriangleRight: React.FC<TriangleProps> = ({ children, height, color = "black", size = "100px" }) => {
  return (
    <>
      {children ? (
        <div
          className="triangle"
          style={{
            width: "0",
            height: "0",
            borderTop: `${size} solid transparent`,
            borderBottom: `${size} solid transparent`,
            borderLeft: `${height} solid ${color}`,
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
            borderBottom: `${size} solid transparent`,
            borderLeft: `${height} solid ${color}`,
          }}
        ></div>
      )}
    </>
  );
};

export default TriangleRight;
