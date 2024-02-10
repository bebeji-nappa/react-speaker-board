import React from "react";
import Square from "./Square";
import TriangleDown from "./TriangleDown";

const ArrowDown: React.FC<ArrowUpProps> = ({ height = "100px", color = "black" }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Square width="50px" height={height} color={color} />
      <TriangleDown height="50px" size="60px" color={color} />
    </div>
  )
}

export default ArrowDown;
