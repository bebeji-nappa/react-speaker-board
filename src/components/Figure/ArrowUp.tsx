import React from "react";
import Square from "./Square";
import TriangleUp from "./TriangleUp";

const ArrowUp: React.FC<ArrowUpProps> = ({ height = "100", color = "black" }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <TriangleUp height="50" size="60" color={color} />
      <Square width="50" height={height} color={color} />
    </div>
  )
}

export default ArrowUp;
