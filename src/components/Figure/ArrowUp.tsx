import React from "react";
import Square from "./Square";
import TriangleUp from "./TriangleUp";

const ArrowUp: React.FC<ArrowUpProps> = ({ height = "100px", color = "black" }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <TriangleUp height="50px" size="60px" color={color} />
      <Square width="50px" height={height} color={color} />
    </div>
  )
}

export default ArrowUp;
