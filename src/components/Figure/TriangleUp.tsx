import React from "react";
import "../../types";

const TriangleUp: React.FC<TriangleProps> = ({
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
            borderRight: `${size} solid transparent`,
            borderBottom: `${height} solid ${color}`,
            borderLeft: `${size} solid transparent`,
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
            borderRight: `${size} solid transparent`,
            borderBottom: `${height} solid ${color}`,
            borderLeft: `${size} solid transparent`,
          }}
        ></div>
      )}
    </>
  );
};

export default TriangleUp;
