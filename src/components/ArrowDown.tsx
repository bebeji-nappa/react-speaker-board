import React from "react";
import Square from "./Square";
import TriangleDown from "./TriangleDown";

const ArrowDown: React.FC<ArrowUpProps> = ({ height = "100", color = "black" }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Square width="50" height={height} color={color} />
      <TriangleDown height="50" size="60" color={color} />
    </div>
  )
}

export default ArrowDown;
